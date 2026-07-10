


// Payload keys are snake_case to match the Pydantic schema on the backend.
// On success, the backend is expected to push the row to Supabase and
// return a 2xx response (body is optional — we don't depend on its shape).
// On validation failure, FastAPI/Pydantic's default error shape is:
//   { "detail": [ { "loc": [...], "msg": "...", "type": "..." } ] }


const API_ENDPOINTS = {
  mentor: '/api/mentor-application',
  mentee: '/api/mentee-application'
};

document.addEventListener('DOMContentLoaded', () => {
  const roleToggle = document.getElementById('roleToggle');
  const mentorForm = document.getElementById('mentorForm');
  const menteeForm = document.getElementById('menteeForm');
  const reviewState = document.getElementById('reviewState');
  const reviewList = document.getElementById('reviewList');
  const reviewError = document.getElementById('reviewError');
  const successState = document.getElementById('successState');
  const jsonPreview = document.getElementById('jsonPreview');
  const editFromReviewBtn = document.getElementById('editFromReviewBtn');
  const confirmSubmitBtn = document.getElementById('confirmSubmitBtn');
  const editAgainBtn = document.getElementById('editAgainBtn');

  if (!roleToggle) return;

  const toggleBtns = roleToggle.querySelectorAll('.toggle-btn');

  const FIELD_LABELS = {
    full_name: 'Full Name',
    email: 'Email',
    current_status: 'Current Status',
    college_institution: 'College / Institution',
    tracks: 'Track(s) You Want To Mentor',
    proof_of_eligibility: 'Proof Of Eligibility',
    reddit_username: 'Reddit Username',
    discord_username: 'Discord Username',
    display_name: 'Preferred Display Name',
    availability: 'Availability',
    why_mentor: 'Why Do You Want To Mentor?',
    class_grade: 'Class / Grade',
    track: "Track You're Applying For",
    help_needed: 'What You Want Help With',
    commitment: 'Time Commitment Per Month',
    heard_from: 'Where You Heard About Us',
    anything_else: 'Anything Else'
  };

  let currentRole = 'mentor';
  let pendingPayload = null;

  // Live word-count
  function countWords(text) {
    const trimmed = text.trim();
    if (!trimmed) return 0;
    return trimmed.split(/\s+/).length;
  }

  function setupWordLimits() {
    document.querySelectorAll('textarea[data-word-limit]').forEach(textarea => {
      const limit = parseInt(textarea.dataset.wordLimit, 10);
      const counter = document.querySelector(`[data-counter-for="${textarea.id}"]`);
      if (!counter) return;

      function update() {
        let words = countWords(textarea.value);

        // If they paste/type past the limit, trim back down to it.
        if (words > limit) {
          const trimmedWords = textarea.value.trim().split(/\s+/).slice(0, limit);
          textarea.value = trimmedWords.join(' ');
          words = limit;
        }

        counter.textContent = `${words} / ${limit} words`;
        counter.classList.toggle('near-limit', words >= limit * 0.9 && words < limit);
        counter.classList.toggle('at-limit', words >= limit);
      }

      textarea.addEventListener('input', update);
      update();
    });
  }

  setupWordLimits();

  function showOnly(stateName) {
    roleToggle.classList.toggle('hidden', stateName !== 'form');
    mentorForm.classList.add('hidden');
    menteeForm.classList.add('hidden');
    reviewState.classList.add('hidden');
    successState.classList.add('hidden');
    hideReviewError();

    if (stateName === 'form') {
      (currentRole === 'mentor' ? mentorForm : menteeForm).classList.remove('hidden');
    } else if (stateName === 'review') {
      reviewState.classList.remove('hidden');
    } else if (stateName === 'success') {
      successState.classList.remove('hidden');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showRole(role) {
    currentRole = role;
    toggleBtns.forEach(btn => {
      const isActive = btn.dataset.role === role;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    showOnly('form');
  }

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => showRole(btn.dataset.role));
  });

  // Collects a form into a plain JSON-serialisable object.
  function formToPayload(formEl, role) {
    const formData = new FormData(formEl);
    const payload = { application_type: role, submitted_at: new Date().toISOString() };

    for (const [key, value] of formData.entries()) {
      if (payload.hasOwnProperty(key)) {
        if (Array.isArray(payload[key])) {
          payload[key].push(value);
        } else {
          payload[key] = [payload[key], value];
        }
      } else {
        const isCheckboxGroup = formEl.querySelectorAll(
          `input[type="checkbox"][name="${CSS.escape(key)}"]`
        ).length > 0;
        payload[key] = isCheckboxGroup ? [value] : value;
      }
    }

    formEl.querySelectorAll('.checkbox-group[data-name]').forEach(group => {
      const name = group.dataset.name;
      if (!(name in payload)) payload[name] = [];
    });

    return payload;
  }

  function formatValue(value) {
    if (Array.isArray(value)) return value.length ? value.join(', ') : '';
    return (value || '').toString().trim();
  }

  function renderReview(payload) {
    reviewList.innerHTML = '';

    Object.keys(payload).forEach(key => {
      if (key === 'application_type' || key === 'submitted_at') return;

      const label = FIELD_LABELS[key] || key;
      const value = formatValue(payload[key]);

      const row = document.createElement('div');
      row.className = 'review-row';

      const labelEl = document.createElement('div');
      labelEl.className = 'review-label';
      labelEl.textContent = label;

      const valueEl = document.createElement('div');
      valueEl.className = value ? 'review-value' : 'review-value empty';
      valueEl.textContent = value || 'Not provided';

      row.appendChild(labelEl);
      row.appendChild(valueEl);
      reviewList.appendChild(row);
    });
  }

  function showReviewError(message) {
    reviewError.textContent = message;
    reviewError.classList.remove('hidden');
  }

  function hideReviewError() {
    reviewError.textContent = '';
    reviewError.classList.add('hidden');
  }

  function parseErrorBody(body) {
    if (!body) return null;
    if (typeof body.detail === 'string') return body.detail;
    if (Array.isArray(body.detail)) {
      return body.detail
        .map(err => {
          const field = Array.isArray(err.loc) ? err.loc[err.loc.length - 1] : '';
          const label = FIELD_LABELS[field] || field;
          // Pydantic prefixes custom @field_validator ValueErrors with
          // "Value error, " — strip that for a cleaner message.
          const msg = (err.msg || '').replace(/^Value error,\s*/i, '');
          return label ? `${label}: ${msg}` : msg;
        })
        .join(' | ');
    }
    if (body.message) return body.message;
    return null;
  }

  function handleFormSubmit(e, formEl, role) {
    e.preventDefault();

    if (!formEl.checkValidity()) {
      formEl.reportValidity();
      return;
    }

    pendingPayload = formToPayload(formEl, role);
    renderReview(pendingPayload);
    showOnly('review');
  }

  mentorForm.addEventListener('submit', (e) => handleFormSubmit(e, mentorForm, 'mentor'));
  menteeForm.addEventListener('submit', (e) => handleFormSubmit(e, menteeForm, 'mentee'));

  editFromReviewBtn.addEventListener('click', () => {
    showOnly('form');
  });

  async function submitApplication() {
    if (!pendingPayload) return;

    hideReviewError();
    confirmSubmitBtn.disabled = true;
    editFromReviewBtn.disabled = true;
    confirmSubmitBtn.textContent = '[ submitting... ]';

    const endpoint = API_ENDPOINTS[currentRole];

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pendingPayload)
      });

      let body = null;
      try {
        body = await res.json();
      } catch (_) {
        // No/invalid JSON body — fine for a plain 2xx response.
      }

      if (!res.ok) {
        // 422 = Pydantic validation error, anything else = server/other error
        const parsed = parseErrorBody(body);
        throw new Error(
          parsed || `Submission failed (HTTP ${res.status}). Please try again.`
        );
      }

      jsonPreview.textContent = JSON.stringify(pendingPayload, null, 2);
      showOnly('success');
    } catch (err) {
      const message = err instanceof TypeError
        ? 'Network error — please check your connection and try again.'
        : err.message;
      showReviewError(message);
    } finally {
      confirmSubmitBtn.disabled = false;
      editFromReviewBtn.disabled = false;
      confirmSubmitBtn.textContent = '[ confirm & submit ]';
    }
  }

  confirmSubmitBtn.addEventListener('click', submitApplication);

  editAgainBtn.addEventListener('click', () => {
    pendingPayload = null;
    mentorForm.reset();
    menteeForm.reset();
    showRole(currentRole);
  });

  showRole('mentor');
});