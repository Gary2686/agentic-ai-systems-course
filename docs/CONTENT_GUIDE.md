# Content Maintenance Guide

## Update chapter content

All chapter content currently lives in `script.js`:

- `parts`: course part labels and chapter grouping
- `chapters`: chapter learning materials and quizzes
- `quiz`: single-choice questions, answer index, and explanation

This structure is intentionally simple for GitHub Pages. Later, it can be moved into JSON, Markdown, a CMS, or a database without redesigning the interface.

## Add database-backed scores later

The quiz currently stores score only in the current browser session. To persist student progress later, add:

- authentication or anonymous student ID
- quiz attempt table
- chapter completion table
- API endpoint or serverless function

Suggested future schema:

```text
students(id, display_name, created_at)
quiz_attempts(id, student_id, chapter_id, score, total, created_at)
quiz_answers(id, attempt_id, question_id, selected_option, is_correct)
```

