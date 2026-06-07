const fs = require('fs');

function processFile(filePath, lang) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace each story's step 1 and step 2 manually based on known structure
  // The regex finds step 1 block until the closing '},' and step 2 block until '},'
  
  const regex = /{\s*step:\s*1,([\s\S]*?)impactTitle:\s*"(HEADLINE|SCHLAGZEILE)",\s*impactText:\s*"",([\s\S]*?)},\s*{\s*step:\s*2,([\s\S]*?)impactTitle:\s*"(SUMMARY|ZUSAMMENFASSUNG)",\s*impactText:\s*(".*?"),([\s\S]*?)},/g;

  content = content.replace(regex, (match, p1, headlineTitle, p3, p4, summaryTitle, summaryText, p7) => {
    const combinedTitle = headlineTitle === "HEADLINE" ? "HEADLINE & SUMMARY" : "SCHLAGZEILE & ZUSAMMENFASSUNG";
    return `{
        step: 1,${p1}impactTitle: "${combinedTitle}",
        impactText: ${summaryText},${p3}},`;
  });

  // Fix the 'step' numbering for the remaining steps
  content = content.replace(/step:\s*3,/g, "step: 2,");
  content = content.replace(/step:\s*4,/g, "step: 3,");

  // Fix 4/4 to use dynamic loopSteps length
  content = content.replace(/<div class="explainer-header-right">4\/4<\/div>/g, `<div class="explainer-header-right">\${loopSteps.length}/\${loopSteps.length}</div>`);

  // Fix email form
  if (lang === 'en') {
    const englishForm = `<label for="emailInput" class="form-label">Email Address</label>`;
    const englishNewForm = `<label for="firstNameInput" class="form-label">First Name</label>
          <input type="text" id="firstNameInput" class="form-textarea" style="height: 48px; resize: none; padding: 12px; border-radius: 12px; border: 1px solid var(--border-soft); background-color: var(--bg-surface); font-family: var(--font-body); font-size: 15px;" placeholder="Jane" required />
          <label for="lastNameInput" class="form-label" style="margin-top: 8px;">Last Name</label>
          <input type="text" id="lastNameInput" class="form-textarea" style="height: 48px; resize: none; padding: 12px; border-radius: 12px; border: 1px solid var(--border-soft); background-color: var(--bg-surface); font-family: var(--font-body); font-size: 15px;" placeholder="Doe" required />
          <label for="emailInput" class="form-label" style="margin-top: 8px;">Email Address</label>`;
    content = content.replace(englishForm, englishNewForm);
  } else {
    const germanForm = `<label for="emailInput" class="form-label">E-Mail-Adresse</label>`;
    const germanNewForm = `<label for="firstNameInput" class="form-label">Vorname</label>
          <input type="text" id="firstNameInput" class="form-textarea" style="height: 48px; resize: none; padding: 12px; border-radius: 12px; border: 1px solid var(--border-soft); background-color: var(--bg-surface); font-family: var(--font-body); font-size: 15px;" placeholder="Max" required />
          <label for="lastNameInput" class="form-label" style="margin-top: 8px;">Nachname</label>
          <input type="text" id="lastNameInput" class="form-textarea" style="height: 48px; resize: none; padding: 12px; border-radius: 12px; border: 1px solid var(--border-soft); background-color: var(--bg-surface); font-family: var(--font-body); font-size: 15px;" placeholder="Mustermann" required />
          <label for="emailInput" class="form-label" style="margin-top: 8px;">E-Mail-Adresse</label>`;
    content = content.replace(germanForm, germanNewForm);
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

processFile('/home/eugenio3/StimmeEXTRAEXTRA/project/src/app/page.js', 'en');
processFile('/home/eugenio3/StimmeEXTRAEXTRA/project/de/src/app/page.js', 'de');
console.log("Done");
