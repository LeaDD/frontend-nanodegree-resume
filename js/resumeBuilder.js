/*
resumeBuilder.js - Objects to hold detail data and functions to display it.
 */

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
    "picURL": "images/blackfyre_2.jpeg",
    "welcome": "Hi, welcome to my page",
    "skills": [
        "HTML", "CSS", "Javascript", "jQuery", "SQL Server", "VBA"
    ]
 };

var work = {
    "jobs": [
        {
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
    "schools": [
        {
            "name": "Navarro College",
            "location": "Waxahachie, TX",
            "years": "1989",
            "major": "Computer Science",
        },
        {
            "name": "The University of Texas at Arlington",
            "location": "Arlington, TX",
            "years": "1989/1991",
            "major": "Computer Science",
        }
    ]
 };

var projects = {
    "projects": [
        {
            "title": "Project Portfolio",
            "dates": "2016",
            "description": "Simple site to describe and link to my front end development projects.",
            "images": ["images/blackfyre_2.jpeg"],
            "projURL": "https://github.com/LeaDD/portfolio"
        }
    ]
};

bio.contactsDisplay = function() {
    for(var i = 0; i < bio.contacts.length; i++) {
        for(contact in bio.contacts[i]) {
            var formattedContact = HTMLcontactGeneric.replace("%contact%", contact);
            formattedContact = formattedContact.replace("%data%", bio.contacts[i][contact]);
            $("#topContacts:last").append(formattedContact);
            $("#footerContacts:last").append(formattedContact);
        };
    }
};

bio.skillsDisplay = function() {
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
            $("#skills").append(formattedSkill);
        };
    };
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").append(formattedName + " " + formattedRole);

    var formattedBioPic = HTMLbioPic.replace("%data%",bio.picURL);
    $("#header").append(formattedBioPic);

    var formattedWelcome = HTMLWelcomeMsg.replace("%data%",bio.welcome);
    $("#header").append(formattedWelcome);

    bio.skillsDisplay();
    bio.contactsDisplay();
};

work.display = function() {
    if (work.jobs.length > 0) {
        for (job in work.jobs) {
            //create new div for work experience
            $("#workExperience").append(HTMLworkStart);
            //format job data into predefined tags
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
            var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
            //concatenate all of the formatted tags
            var formattedWork = formattedEmployer + formattedTitle + formattedDates + formattedDescription;
            //and append to the div
            $(".work-entry:last").append(formattedWork);
        };
    };
};

education.display = function() {
    if (education.schools.length > 0) {
        for(var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedSchName = HTMLschoolName.replace("%data%",education.schools[i].name);
            var formattedSchDates = HTMLschoolDates.replace("%data%",education.schools[i].years);
            var formattedSchLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);

            $(".education-entry:last").append(formattedSchName);
            $(".education-entry:last").append(HTMLschoolDTLOC);
            $(".education-DTLOC:last").append( formattedSchDates, formattedSchLocation);
        }
    }
};

projects.display = function() {
    if(projects.projects.length > 0) {
        for(var i = 0; i < projects.projects.length; i++) {
                $("#projects").append(HTMLprojectStart);
                var formattedProjTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
                formattedProjTitle = formattedProjTitle.replace("%link%",projects.projects[i].projURL);
                var formattedProjDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
                var formattedProjDesc = HTMLprojectDescription.replace("%data%",projects.projects[i].description)

                var formattedProject = formattedProjTitle + formattedProjDates + formattedProjDesc;
                $(".project-entry:last").append(formattedProject)
                //Iterate over images for each project
                if(projects.projects[i].images.length > 0) {
                    for(var j = 0; j < projects.projects[i].images.length; j++) {
                        var formattedProjImage = HTMLprojectImage.replace("%data%",projects.projects[i].images);
                        $(".project-entry:last").append(formattedProjImage);
                    };
                }
        }
    }
};

function inName(name) {
    var names = name.trim().split(" ");

    var formattedFirst = (names[0][0].toUpperCase() + names[0].slice(1).toLowerCase());
    var formattedLast = (names[1].toUpperCase());

    return formattedFirst + " " + formattedLast;
};

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

$("#mapDiv").append(googleMap);