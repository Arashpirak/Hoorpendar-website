@AGENTS.md

# Writing site copy

Before writing or editing any Persian text on the site (`messages/fa.json`, `content/**/*.ts`), load the
`persian-writing` skill in `.claude/skills/persian-writing` and follow `references/writing-style.md`.
Apply the same standard to the English copy.

- Website copy is formal-but-human: است and می‌شود (never می‌باشد), short sentences, concrete claims.
- Leads, summaries and descriptions are complete sentences with a verb. Headings say something concrete;
  no verbless slogans such as «ساخت هورپندار، در خدمت صنایع کشور».
- «ما» for what the company did, the bare verb for the reader, an impersonal voice for how a device works.
- No em dashes, rule-of-three lists, «نه تنها ... بلکه», «در راستای», «نقش بسزایی» or similar tells.
- Model codes and technical units (FDU-300, 24Vdc, 4-20mA) stay Latin; other digits in Persian prose are Persian.
- Check a draft with `python .claude/skills/persian-writing/scripts/fa_lint.py --check --rhythm <file>`.

The skill is vendored from github.com/ali2000hos/persian-writing (MIT, commit 35eb7a5, v1.3.6) without its
fonts, spell-check dictionary and docs images, which this site does not need.
