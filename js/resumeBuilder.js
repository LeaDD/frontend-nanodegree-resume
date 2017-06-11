/*
resumeBuilder.js - Objects to hold detail data and functions to display it.
 */

/*Bio, work, education and projects objects contain the detail data that will be displayed in the corresponding sections of the resume.*/

var model = {
    bio:  {
        "name": "David Deal",
        "role": "Web Developer",
        "contacts": {
            "mobile": "212-867-5309",
            "email": "ddeal812@gmail.com",
            "github": "https://github.com/LeaDD/",
            "twitter": "darth_midlo",
            "location": "Midlothian, TX, US"
        },
        "welcomeMessage": "Hi, my name is David Deal and I am a Texas based free lance web developer building customized, dynamic and fully responsive sites.",
        "skills": [
            "HTML", "CSS", "Javascript", "jQuery", "SQL Server", "VBA"
        ],
        "biopic": "images/blackfyre_2.jpeg"
    },
    work: {
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
    },
    education: {
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
    },
    projects: {
        "projects": [{
            "title": "Project Portfolio",
            "dates": "2016",
            "description": "Simple site to describe and link to my front end development projects.",
            "images": ["images/ddeal-info-1.jpg", "images/ddeal-info-stylized.jpg"],
            "url": "https://github.com/LeaDD/portfolio"
        }]
    }
}

//Bio function displays detailed biographical information.
model.bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", model.bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", model.bio.role);
    $("#header").prepend(formattedName + " " + formattedRole);

    var formattedBioPic = HTMLbioPic.replace("%data%", model.bio.biopic);
    $("#header").append(formattedBioPic);

    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", model.bio.welcomeMessage);
    $("#header").append(formattedWelcome);


    if (model.bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        //Loop through skills and append to the skills section.
        for (var i = 0; i < model.bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", model.bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }

    var formattedMobile = HTMLmobile.replace("%data%", model.bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", model.bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", model.bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", model.bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", model.bio.contacts.location);
    //formattedContact = formattedContact.replace("%data%", bio.contacts[i]);
    var formattedContact = formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation;

    $("#topContacts, #footerContacts").append(formattedContact);
};

//Work function to display detailed employment history.
model.work.display = function() {
    if (model.work.jobs.length > 0) {
        //Loop through job history then gather and display various data points.
        for (var i = 0; i < model.work.jobs.length; i++) {
            //create new div for work experience
            $("#workExperience").append(HTMLworkStart);
            //format job data into predefined tags
            var formattedEmployer = HTMLworkEmployer.replace("%data%", model.work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", model.work.jobs[i].title);
            var formattedDates = HTMLworkDates.replace("%data%", model.work.jobs[i].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", model.work.jobs[i].description);
            var formattedLocation = HTMLworkLocation.replace("%data%", model.work.jobs[i].location);
            //concatenate all of the formatted tags
            var formattedWork = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
            //and append to the div
            $(".work-entry:last").append(formattedWork);
        }
    }
};

//Education function to display detailed education history.
model.education.display = function() {
    if (model.education.schools.length > 0) {
        /*Loop through education history then gather and display various data points*/
        for (var i = 0; i < model.education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedSchName = HTMLschoolName.replace("%data%", model.education.schools[i].name).replace("#",model.education.schools[i].url);
            var formattedSchDates = HTMLschoolDates.replace("%data%", model.education.schools[i].dates);
            var formattedSchLocation = HTMLschoolLocation.replace("%data%", model.education.schools[i].location);
            var formattedSchMajor = HTMLschoolMajor.replace("%data%", model.education.schools[i].majors);
            var formattedSchDegree = HTMLschoolDegree.replace("%data%", model.education.schools[i].degree);

            $(".education-entry:last").append(formattedSchName + formattedSchDegree);
            $(".education-entry:last").append(formattedSchDates);
            $(".education-entry:last").append(formattedSchLocation);
            $(".education-entry:last").append(formattedSchMajor);
        }
    }

    $("#education").append(HTMLonlineClasses);

    if (model.education.onlineCourses.length > 0) {
        /*Loop through education history then gather and display various data points*/
        for (var j = 0; j < model.education.onlineCourses.length; j++) {
            $("#education").append(HTMLschoolStart);
            var formattedOLName = HTMLonlineSchool.replace("%data%", model.education.onlineCourses[j].school).replace("#",model.education.onlineCourses[j].url);
            var formattedOLDates = HTMLonlineDates.replace("%data%", model.education.onlineCourses[j].dates);
            var formattedOLCourse = HTMLonlineTitle.replace("%data%",model.education.onlineCourses[j].title);
            var formattedOLURL = HTMLonlineURL.replace("%data%",model.education.onlineCourses[j].url).replace("#",model.education.onlineCourses[j].url);

            $(".education-entry:last").append(formattedOLCourse + formattedOLName);
            $(".education-entry:last").append(formattedOLDates);
            $(".education-entry:last").append(formattedOLURL);
        }
    }
};

model.projects.display = function() {
    if (model.projects.projects.length > 0) {
        /*Loop through projects then gather and display various data points*/
        for (var i = 0; i < model.projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjTitle = HTMLprojectTitle.replace("%data%", model.projects.projects[i].title);
            formattedProjTitle = formattedProjTitle.replace("%link%", model.projects.projects[i].url);
            var formattedProjDates = HTMLprojectDates.replace("%data%", model.projects.projects[i].dates);
            var formattedProjDesc = HTMLprojectDescription.replace("%data%", model.projects.projects[i].description);

            var formattedProject = formattedProjTitle + formattedProjDates + formattedProjDesc;
            $(".project-entry:last").append(formattedProject);
            //Iterate over images for each project
            if (model.projects.projects[i].images.length > 0) {
                for (var j = 0; j < model.projects.projects[i].images.length; j++) {
                    var formattedProjImage = HTMLprojectImage.replace("%data%", model.projects.projects[i].images[j]);
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

//Call functions by section to display resume data
model.work.display();
model.projects.display();
model.education.display();
model.bio.display();

//Display button to internationalize name
$("#main").append(internationalizeButton);

//Display map of 'lived and worked' locations
$("#mapDiv").append(googleMap);