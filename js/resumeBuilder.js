/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {
    "name": "David Deal",
    "role": "Web Developer",
    "contactInfo": {
        "mobile": "212-867-5309",
        "email": "ddeal812@gmail.com",
        "github": "https://github.com/LeaDD/",
        "twitter": "darth_midlo",
        "location": "DFW"
        },
    "picURL": "images/blackfyre_2.jpeg",
    "welcome": "Hi, welcome to my page",
    "skills": [
        "HTML", "CSS", "Javascript","SQL Server", "VBA"
    ]
 };

var work = {
    "jobs": [
        {
            "employer": "Citibank",
            "title": "Sr BP&A Analyst",
            "dates": "January 2015 - Present",
            "description": "Analyst in the strategic planning and data analysis group for Commercial Lending. Providing adhoc reporting to various business units throughout Commercial group as well as some database development and desktop automation using SQL Server, SSIS and VB/VBA. Support regulatory reporting as well as profitability planning and reporting."
        },
        {
            "employer": "Citibank",
            "title": "Business Analyst AVP",
            "dates": "August 2008 - January 2015",
            "description": "Ad hoc and scheduled reporting to support the Commercial Loan Operations and Credit teams. User acceptance testing of updates and new functionality to various product processors and other business systems. System administrator for multiple in-house developed workflow and regulatory tracking applications (both distributed and web-based). "
        },
        {
            "employer": "Chase Bank",
            "title": "Sr Operations Manager",
            "dates": "October 1998 - August 2008",
            "description": "Manage staff of up to 62 employees (currently 42) performing encoding, corrections and receiving functions."
        }
    ]
 };

 var education = {
    "schools": [
        {
            "name": "Navarro College",
            "city": "Waxahachie, TX",
            "years": "1989",
            "major": "General Studies"
        },
        {
            "name": "The University of Texas at Arlington",
            "city": "Arlington, TX",
            "years": "1989/1991",
            "major": "Computer Science"
        }
    ]
 };

var projects = {
    "projects": [
        {
            "title": "Project Portfolio",
            "dates": "2016",
            "description": "Simple site to describe and link to my front end development projects."
        }
    ]
};

var test1 = HTMLheaderName.replace("%data%",bio.name);
$("#header").append(test1);


if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for (skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
        $("#skills").append(formattedSkill);
    };
};

if (work.jobs.length > 0) {

    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
        var formattedWork = formattedEmployer + formattedTitle + formattedDates + formattedDescription;
        $(".work-entry:last").append(formattedWork);
    };

/*
    for (var i = 0;i < work.jobs.length;i++) {
        $("#workExperience").append(HTMLworkStart);

        console.log(HTMLworkEmployer.replace("%data%", work.jobs[i].employer));

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
    };
*/
};

 /*CODE SAMPLES

    append/prepend

     $("#main").append("David Deal");
     $("#header").prepend(formattedRole);

    replace

    var awesomeThoughts = "I am Dave and I am AWESOME!"
    var funThoughts = awesomeThoughts.replace('AWESOME','FUN');
 */