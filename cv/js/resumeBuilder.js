// Bio
var bio = {
	name: "hau tran",
	role: "Consultant.NET",
	contacts: {
		mobile: "06 xx xx xx xx",
		email: "xxxxxxx <i class='fa fa-at' /> gmail point com",
        github: "haubad.github.io",
		location: "Toulouse"
	},
	welcomeMessage: "Code, code et code",
	skills: ["<li>Java</li><li><i class='fa fa-android green'/> Android</li>",
             "<li>C++</li><li>C#</li><li>WPF</li>",
             "<li>Dart</li><li>JavaScript</li>",
             "<li><i class='fa fa-html5 tomato'/> HTML5</li><li><i class='fa fa-css3 blue'/> CSS3</li><li>ASP.NET MVC</li>"],
	pic: "images/hhh.jpg"
};

var header = $("header");
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedDiv  = HTMLheaderDiv.replace("%name%", formattedName)
                                .replace("%role%", formattedRole)
                                .replace("%options%", HTMLheaderOptions)
                                .replace("%line%", HTMLheaderLine);
header.prepend(formattedDiv);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedMobile)
	.append(formattedEmail)
    .append(formattedGithub)
	.append(formattedLocation);

header.append(HTMLbioPic.replace("%data%", bio["pic"]));

if (bio.skills.length > 0) {
	header.append(HTMLskillsStart);
	bio.skills.forEach(function (skill) {
		$("#skills").append(HTMLskills.replace("%data%", skill));
	});
}

function switch_theme(s) {
    var options = $('.dropdown-menu');
    if (s == 0) {
        document.cookie = 'theme=0;';
        options.find('li:nth-child(1) a').addClass('disabled');
        options.find('li:nth-child(3) a').removeClass('disabled');
        document.getElementById('theme').href = "";
    } else if (s == 1) {
        document.cookie = 'theme=1;';
        options.find('li:nth-child(1) a').removeClass('disabled');
        options.find('li:nth-child(3) a').addClass('disabled');
        document.getElementById('theme').href = "css/style-light.css";
    }
}

function initOptions(first) {
    var options = $('.dropdown-menu');
    options.attr('style', 'position: relative;');
    options.attr('class', 'dropdown-menu clear right open');
    options.attr('style', 'position: absolute; top: ' + (options.offset().top-0) + 'px; left: ' + options.offset().left + 'px;');
    options.attr('class', 'dropdown-menu clear right');
    
    if (first == true) {
        if (document.cookie.indexOf("theme=1") != -1) {
            options.find('li:nth-child(1) a').removeClass('disabled');
            options.find('li:nth-child(3) a').addClass('disabled');
            document.getElementById('theme').href = "css/style-light.css";
        }
    }
}
initOptions(true);

// Wok = {jobs, display}
var jobs = [
    {
		cat: "#work2016",
		employer: "",
		title: "Concours de programmation <i>Codingame</i> (<b>Dart</b>)",
		dates: "2016",
		gps: "",
		location: "Montpellier",
		url: "http://www.codingame.com/profile/39052a18adfadaf0d5433339689daf80513391",
		desc: [
            "Challenge d'IA <i>Smash the Code</i> (30/04/2016 – 08/05/2016) (156eSUP sur 2493) (<a class='a-inline' href='http://www.dartlang.org/' target='_blank'>dart</a>)",
              ]
	},
	{
		cat: "#work2015",
		employer: "Consultant.NET",
		title: "",
		dates: "Depuis 08/2015",
		gps: "31130 Balma",
		location: "Toulouse",
		url: "",
        list: "none",
		desc: ["<p>Développer des applications web en utilisant les technos de Microsoft (ASP.NET MVC, Web API, Entity Framework, SQL Server, JavaScript, jQuery, AngularJS, Cordova, html5, css3)"]
	},
    {
		cat: "#work2015",
		employer: "",
		title: "Projets personnels",
		dates: "2015",
		gps: "",
		location: "Toulouse",
		url: "#",
		desc: ["<a class='a-inline' href='http://haubad.github.io/lpv/' target='_blank'>Visionneuse de photos</a> : crée un nouveau look du site <span class='tomato-text'>Light Photo Viewer</span> (<span class='fa fa-html5 fa-right tomato'/>html5, <span class='fa fa-css3 fa-right blue'/>css3)", 
               "<a class='a-inline' href='http://haubad.github.io/albums/' target='_blank'>Albums</a> : visualise mes photos sur le serveur (html5, css3,JavaScript, jQuery)"
              ]
	},
	{
		cat: "#work2015",
		employer: "",
		title: "Concours de programmation <i>Codingame</i> (<b>Dart</b>)",
		dates: "2015",
		gps: "",
		location: "Montpellier",
		url: "http://www.codingame.com/profile/39052a18adfadaf0d5433339689daf80513391",
		desc: [
            "Challenge d'IA <i>Back to the Code</i> (26/09/2015 – 04/10/2015) (94eSUP sur 2017)",
            "Challenge d'IA <i>The Great Escape</i> (06/02/2015 – 20/02/2015) (51eSUP sur 1153)"
              ]
	},
	{
		cat: "#work2014",
		employer: "",
		title: "Concours de programmation <i>Codingame</i> (<b>Java</b>)",
		dates: "2014",
		gps: "",
		location: "Montpellier",
		url: "http://www.codingame.com/profile/39052a18adfadaf0d5433339689daf80513391",
		desc: ["Challenge d'IA <i>Platinum Rift</i> (08/11/2014 – 26/11/2014)", 
               "Challenge <i>Battle Dev de RégionJob</i> (12/11/2014) (25eSUP sur 375; 9eSUP sur 91 développeurs Java)", 
               "Challenge d'IA <i>Poker Chip Race</i> (10/09/2014 – 24/09/2014) (20eSUP sur 449)", 
               "Challenge <i>Battle Dev de RégionJob</i> (10/06/2014)", 
               "Challenge <i>Skynet Finale</i> (06/05/2013)", 
               "Challenge d'IA <i>Game of Drones</i> (14/03/2014 – 28/03/2014)", 
               "Challenge d'IA <i>Tron Battle</i> (10/01/2014 – 28/02/2014) (3eSUP sur 672)"
              ]
	},
	{
		cat: "#work2014",
		employer: "",
		title: "Projets personnels (<b><i class='fa fa-android green'/> Android</b>)",
		dates: "2014",
		gps: "",
		location: "Toulouse",
		url: "#",
		desc: ["<i>Météo</i> : visualise la météo à quatorze jours", 
               "<a class='a-inline' href='http://www.amazon.com/zunedev-Exposure-Calculator-ND-Filters/dp/B00V3G3XYK/ref=sr_1_fkmr0_1?ie=UTF8&qid=1427138565&sr=8-1-fkmr0&keywords=Exposure+Calculator+%28ND+Filters%29' target='_blank'>Calculatrice d'exposition</a> : calcule la durée d'exposition en fonction du filtre neutre utilisé", 
               "<i>Caméra IP</i> : transforme le smartphone en caméra de surveillance sans fil (via le protocole rtp)"
              ]
	},
	{
		cat: "#work2013",
		employer: "",
		title: "Concours de programmation <i>Codingame</i> (<b>Java</b>)",
		dates: "2013",
		gps: "",
		location: "Montpellier",
		url: "http://www.codingame.com/profile/39052a18adfadaf0d5433339689daf80513391",
		desc: ["Challenge <i>Doctor Who</i> (23/11/2013) (131eSUP sur 1251)", 
               "Challenge <i>Battle Dev de SudOuestJob</i> (05/11/2013) (26eSUP sur 168)"
              ]
	},
	{
		cat: "#work2013",
		employer: "",
		title: "Projets personnels (<b><i class='fa fa-android green'/> Android</b>)",
		dates: "2013",
		gps: "",
		location: "Toulouse",
		url: "#",
		desc: ["<i>Caméra IP</i> : transforme le smartphone en caméra de surveillance sans fil"]
	},
	{
		cat: "#work2011-2012",
		employer: "Infotel/Qualifrance",
		title: "Ingénieur d'études C",
		dates: "2012",
		gps: "Infotel 31700 Blagnac",
		location: "Toulouse",
		url: "http://www.infotel.com/logiciels/archivage/arcsys/",
        list: "none",
		desc: ["<p>Maintenir et développer le logiciel Arcsys (archivage électronique de documents) (C, openSUSE)"]
	},
	{
		cat: "#work2011-2012",
		employer: "IRAP/CNRS",
		title: "Ingénieur de recherche et développement Java",
		dates: "03/2011 - 03/2012",
		gps: "IRAP Toulouse",
		location: "Toulouse",
		url: "http://www.irap.omp.eu/observations/projets/projets/projets-tad/projet-cassis",
        list: "none",
		desc: ["<p>Faire évoluer le logiciel Cassis (traitement de spectres des télescopes) (Java, Swing, ANT, Ubuntu)<p class='tab'>&bull; un script pour générer automatiquement une version Cassis<p class='tab'>&bull; un éditeur pour composer, compiler et exécuter des scripts Python<p class='tab'>&bull; un module pour installer et mettre à jour le Cassis<p class='tab'>&bull; un module pour afficher des spectres en miniature ou écran fenêtré"]
	},
	{
		cat: "#work2009-2010",
		employer: "",
		title: "Projets personnels",
		dates: "2009 - 2010",
		gps: "",
		location: "Toulouse",
		url: "#",
		desc: ["<a class='a-inline' href='../lpv/' target='_blank'>Visionneuse de photos</a> (2010) : visionne des photos instantanément en plein écran, écran fenêtré ou miniature (C++, Direct2D, Windows)", 
               "<i>Copieur de fichiers</i> (2009) : facilite la tâche de sauvegarde, accélère la vitesse de copie des gros fichiers et effectue également des copies en ligne de commande (C++/CLI, Windows)", 
               "<i>Lecteur de périphériques de stockage</i> (2009) : récupère des informations des périphériques de stockage (lecteurs, disques, USB) sur l'ordinateur (C++/CLI, Windows)"]
	},
	{
		cat: "#work2008",
		employer: "IRIT/Université Paul Sabatier Toulouse 3",
		title: "Ingénieur de recherche",
		dates: "01/2008 - 07/2008",
		gps: "IRIT Toulouse",
		location: "Toulouse",
		url: "http://www.univ-tlse3.fr/",
        list: "none",
		desc: ["<p>Développer un algorithme d'approximation (C++, Windows)"]
	}
];
var work = {"jobs": jobs};
work.display = function () {
	work.jobs.forEach(function (job) {
		var workCat = job.cat;
		$(workCat).append(HTMLworkStart);

		var formattedWorkEmployer = formatLink(HTMLworkEmployer, job.employer, job.url);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
        var lastWork = $(".work-entry:last");
		if (job.employer !== "") {
            if (job.url !== "#") {
                lastWork.append(formattedWorkEmployer + " - " + formattedWorkTitle);
            } else {
                lastWork.append(HTMLworkTitleProject.replace("%data%", job.employer + " - " + job.title));
            }
            lastWork.append(HTMLworkDates.replace("%data%", job.dates))
                    .append(HTMLworkLocation.replace("%data%", job.location));
		} else if (job.url !== "#") {
			lastWork.append(formattedWorkEmployer + formattedWorkTitle);
		} else {
            lastWork.append(HTMLworkTitleProject.replace("%data%", job.title));
        }
        
		if (job.list !== "none") {
            lastWork.append(HTMLworkDescStart);
            job.desc.forEach(function (p) {
                $('.desc-start:last').append(HTMLworkDesc.replace("%data%", esup(p)));
            });
        } else {
            lastWork.append(HTMLworkDescSimple.replace("%data%", esup(job.desc[0])));
        }
	});
};
work.display();
function esup(s) {
    return s.replace(/eSUP/g, "<sup>e</sup>");
}

// FR/EN button
/*$("#main").prepend(internationalizeButton);
$("#internationalize").click(function() {
    var name = $('#name').html();
    var iName = inName(name);
    $('#name').html(iName);  
});
function inName(name) {
	console.log(name);
	var s = name.split(" ");
	return s[0]+" "+(s[1][1]==='R' ? s[1][0]+s[1].slice(1).toLowerCase() : s[1].toUpperCase());
}*/

// Education/formations = {schools, onlineCourses, display}
var schools = [
	{
		name: "IRIT/Université Paul Sabatier Toulouse 3",
		degree: "Doctorat",
		dates: "10/2003 - 12/2007",
		gps: "IRIT Toulouse",
		location: "Toulouse",
		url: "http://www.univ-tlse3.fr/",
		major: "Intelligence Artificielle"
	},
	{
		name: "IRIT/Université Paul Sabatier Toulouse 3",
		degree: "Master 2",
		dates: "10/2002 - 06/2003",
		gps: "Université Toulouse 3, Toulouse",
		location: "Toulouse",
		url: "http://www.univ-tlse3.fr/",
		major: "Informatique de l'Image et du Langage"
	}
];
var onlineCourses = [
    {
        title: "Formation <i>Microsoft Certified Solutions Developer</i> (C#, WPF, Web avec HTML5, CSS3, JS, ASP.NET, Azure, SharePoint)",
        school: "Centre VAELIA",
        dates: "18/05/2015 - 31/07/2015",
        url: "http://www.cariforef-mp.asso.fr/1-14443-Fiche-formation.php?num=16970",
        loc: "Toulouse",
        gps: "Centre VAELIA Toulouse"
    },
    {
        title: "Programmation des applications mobiles Android",
        school: "Université du Maryland",
        dates: "26/09/2014 – 21/11/2014",
        url: "http://www.coursera.org/signature/certificate/ZMX7ZT8ABK",
        loc: "Cours en ligne",
        gps: ""
    },
    {
        title: "Programmation des services Cloud pour les applications Android",
        school: "Université Vanderbilt",
        dates: "21/07/2014 – 30/09/2014",
        url: "http://www.coursera.org/signature/certificate/864QPVC9LR",
        loc: "Cours en ligne",
        gps: ""
    }
];
var education = {schools : schools, onlineCourses : onlineCourses};
education.display = function () {
	education.onlineCourses.forEach(function (course) {
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = formatLink(HTMLonlineTitle, course.title, course.url);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
		var formattedOnlineUrl = formatLink(HTMLonlineURL, course.url, course.url);
		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool)
            .append(HTMLonlineDates.replace("%data%", course.dates))
            //.append(formattedOnlineUrl)
            .append(HTMLonlineLocation.replace("%data%", course.loc));
	});

	education.schools.forEach(function (school) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", school["name"]);
		formattedSchoolName = formattedSchoolName.replace("#", school["url"]);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school["degree"]);
		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree)
            .append(HTMLschoolDates.replace("%data%", school["dates"]))
			.append(HTMLschoolLocation.replace("%data%", school["location"]))
			.append(HTMLschoolMajor.replace("%data%", school["major"]));
	});
};
education.display();

// Google maps
$("#mapDiv").append(googleMap);

// Footer
$("#footerContacts").append(formattedMobile)
	.append(formattedEmail)
    .append(formattedGithub)
	.append(formattedLocation);

$(window).on('resize', function() {
    initOptions(false);
});

// Return
$(".back-to-top").click(function() {
    console.log("return");
    var timerId = setInterval(function() {
        window.scrollBy(0, -5);
        if (window.pageYOffset < 200) {
            clearInterval(timerId);
            window.scrollTo(0, 0);
        }
    }, 1);
});
