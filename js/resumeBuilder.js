/*
resumeBuilder.js - Objects to hold detail data and functions to display it.
 */

/*Bio, work, education and projects objects contain the detail data that will be displayed in the corresponding sections of the resume.*/

var bio = {
    "name": "David Deal",
    "role": "Web Developer",
    "contacts": [{
        "mobile": "212-867-5309",
        "email": "ddeal812@gmail.com",
        "github": "https://github.com/LeaDD/",
        "twitter": "darth_midlo",
        "location": "Midlothian, TX, US"
    }],
    "welcomeMessage": "Hi, my name is David Deal and I am a Texas based free lance web developer building customized, dynamic and fully responsive sites.",
    "skills": [
        "HTML", "CSS", "Javascript", "jQuery", "SQL Server", "VBA"
    ],
    "biopic": "images/blackfyre_2.jpeg"
};

var work = {
    "jobs": [{
            "employer": "Citibank",
            "title": "Sr BP&A Analyst",
            "dates": "January 2015 - Present",
            "location": "Las Colinas, TX, US",
            "description": "Analyst in the strategic planning and data analysis group for Commercial Lending. Providing adhoc reporting to various business units throughout Commercial group as well as some database development and desktop automation using SQL Server, SSIS and VB/VBA. Support regulatory reporting as well as profitability planning and reporting."
        },
        {
            "employer": "Citibank",
            "title": "Business Analyst AVP",
            "dates": "August 2008 - January 2015",
            "location": "Las Colinas, TX, US",
            "description": "Ad hoc and scheduled reporting to support the Commercial Loan Operations and Credit teams. User acceptance testing of updates and new functionality to various product processors and other business systems. System administrator for multiple in-house developed workflow and regulatory tracking applications (both distributed and web-based). "
        },
        {
            "employer": "Chase Bank",
            "title": "Sr Operations Manager",
            "dates": "October 1998 - August 2008",
            "location": "Arlington, TX, US",
            "description": "Manage staff of up to 62 employees performing encoding, corrections and receiving functions."
        }
    ]
};

var education = {
    "schools": [{
            "name": "Navarro College",
            "location": "Waxahachie, TX",
            "dates": "1989",
            "majors": ["Computer Science","Business"],
            "degree": "Associate of Applied Science",
            "url": "http://www.navarrocollege.edu/"
        },
        {
            "name": "The University of Texas at Arlington",
            "location": "Arlington, TX",
            "dates": "1989/1991",
            "majors": ["Computer Science","Business"],
            "degree": "Bachelor of Science",
            "url": "https://www.uta.edu/uta/"
        }
    ],
    "onlineCourses": [{
            "title": "Frontend Web Developer Nano-Degree",
            "school": "Udacity",
            "dates": "2016",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

var projects = {
    "projects": [{
        "title": "Project Portfolio",
        "dates": "2016",
        "description": "Simple site to describe and link to my front end development projects.",
        "images": ["images/ddeal-info-1.jpg", "images/ddeal-info-stylized.jpg"],
        "url": "https://github.com/LeaDD/portfolio"
    }]
};

//Bio functions to display the contacts, skills, etc
bio.contactsDisplay = function() {
    if (bio.contacts.length > 0) {
        //Loop through contacts and append to the top and footer contact sections.
        for (var i = 0; i < bio.contacts.length; i++ ) {
            var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[0].mobile);
            var formattedEmail = HTMLemail.replace("%data%", bio.contacts[0].email);
            var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[0].twitter);
            var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[0].github);
            var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[0].location);
            //formattedContact = formattedContact.replace("%data%", bio.contacts[i]);
            var formattedContact = formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation;

            $("#topContacts").append(formattedContact);
            $("#footerContacts").append(formattedContact);
        }
    }
};

bio.skillsDisplay = function() {
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        //Loop through skills and append to the skills section.
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};

//Display singular info and call previous functions to show skills and contacts.
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName + " " + formattedRole);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);

    bio.skillsDisplay();
    bio.contactsDisplay();
};

//Work function to display detailed employment history.
work.display = function() {
    if (work.jobs.length > 0) {
        //Loop through job history then gather and display various data points.
        for (var i = 0; i < work.jobs.length; i++) {
            //create new div for work experience
            $("#workExperience").append(HTMLworkStart);
            //format job data into predefined tags
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            //concatenate all of the formatted tags
            var formattedWork = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
            //and append to the div
            $(".work-entry:last").append(formattedWork);
        }
    }
};

//Education function to display detailed education history.
education.display = function() {
    if (education.schools.length > 0) {
        /*Loop through education history then gather and display various data points*/
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedSchName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#",education.schools[i].url);
            var formattedSchDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            var formattedSchDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);

            $(".education-entry:last").append(formattedSchName + formattedSchDegree);
            $(".education-entry:last").append(formattedSchDates);
            $(".education-entry:last").append(formattedSchLocation);
            $(".education-entry:last").append(formattedSchMajor);
        }
    }

    $("#education").append(HTMLonlineClasses);

    if (education.onlineCourses.length > 0) {
        /*Loop through education history then gather and display various data points*/
        for (var j = 0; j < education.onlineCourses.length; j++) {
            $("#education").append(HTMLschoolStart);
            var formattedOLName = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school).replace("#",education.onlineCourses[j].url);
            var formattedOLDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
            var formattedOLCourse = HTMLonlineTitle.replace("%data%",education.onlineCourses[j].title);
            var formattedOLURL = HTMLonlineURL.replace("%data%",education.onlineCourses[j].url).replace("#",education.onlineCourses[j].url);

            $(".education-entry:last").append(formattedOLCourse + formattedOLName);
            $(".education-entry:last").append(formattedOLDates);
            $(".education-entry:last").append(formattedOLURL);
        }
    }
};

projects.display = function() {
    if (projects.projects.length > 0) {
        /*Loop through projects then gather and display various data points*/
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            formattedProjTitle = formattedProjTitle.replace("%link%", projects.projects[i].url);
            var formattedProjDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedProjDesc = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            var formattedProject = formattedProjTitle + formattedProjDates + formattedProjDesc;
            $(".project-entry:last").append(formattedProject);
            //Iterate over images for each project
            if (projects.projects[i].images.length > 0) {
                for (var j = 0; j < projects.projects[i].images.length; j++) {
                    var formattedProjImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                    $(".project-entry:last").append(formattedProjImage);
                }
            }
        }
    }
};

//Function used for 'internationalizing' name.
function inName(name) {
    var names = name.trim().split(" ");

    var formattedFirst = (names[0][0].toUpperCase() + names[0].slice(1).toLowerCase());
    var formattedLast = (names[1].toUpperCase());

    return formattedFirst + " " + formattedLast;
}

//get object keys from array
//*************************************
//console.log(Object.keys(work.jobs[0]));
//*************************************

//Call functions by section to display resume data
work.display();
projects.display();
education.display();
bio.display();

//Display button to internationalize name
$("#main").append(internationalizeButton);

//Display map of 'lived and worked' locations
$("#mapDiv").append(googleMap);