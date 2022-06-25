# Tree of Life Web Application

*This web application was created for the HerHackathon 2022 Merck Challenge. The main goal of this app to support patients to sign up for clinical trials and to help doctors to identify patients for clinical trials.*

## 1. Key features

- The **multi-page** web app is built with **Vanilla JavaScript** and **PyScript**, HTML and CSS
- The layout of the page uses **bootstrap**
- The UI design was created with **accessibility** in mind
- Login page for Health Care Professionals
- Welcome page after login, displaying the Tree of Life, which will grow as the doctors successfully connect patients with trials.
- Match page, where patients can be matched with clinical trials
- Patient Dashboard
- Clinical Trial Dashboard with **PyScript** calculations for the Diversity Index. The Diversity index will be highlighted with different colors to indicate if the value is good or bad: 
    - green if the value is bigger than 0.6 (good diversity index)
  - yellow if the value is between 0.4 and 0.6 (good diversity index)
  - pink if the value is less than 0.4 (good diversity index)
- Profile information

## 2. Requirements

This web app is accessible with any modern web browser (on desktop and on mobile too).

## 3. Usage

- The web app is accessible through a web browser with [this link](https://clever-croquembouche-61c5a6.netlify.app/)
- Health Care Professionals can login with their credentials (this is only a demo, any characters would allow to login)
- After login, the dashboard is presented, with the Tree of Life - where the leafs indicating the number of successful matches done. Below there are 2 dashboards. On the right side, the patient dashboard is shown. On the left side the Clinical Trial dashboard is shown. Both of them can be changed to show different data with the buttons above the charts.
- Matching can be done on the Match page, where left the patient list is shown and right the clinical trial list. After a patient has been paired up with a clinical trial, the matching can be completed with the Match button.
- After a match has been made, the Tree of Life is presented again.
- On the Patient List page a list of the available patients is shown, and new patients can be invited here.
- On the Clinical Trial page a list of the current clinical trials, with Diversity Index is shown.
    > ⚠️ This page contains calculations in Python. Please wait a few seconds until it loads!
- Profile page

### 4. Links

- Visit the weather app [here](https://clever-croquembouche-61c5a6.netlify.app/)
- Further info about [HerHackathon](https://thehackathoncompany.com/herhackathon/)
- More info about the [Merck Challenge for HerHackathon 2022](https://thehackathoncompany.com/wp-content/uploads/2022/04/HE23E51.pdf)
- More info about the [PyScript](https://pyscript.net/)
- All graphical elements are from [Freepik](https://www.freepik.com/vectors/physical-examination) and [Freepik](https://www.freepik.com/vectors/roots)
- The app is hosted on [Netlify](https://www.netlify.com/)
