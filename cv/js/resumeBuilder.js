// Bio
var bio = {
	name: "hau tran",
	role: "Ingénieur d&#39études",
	contacts: {
		mobile: "06 11 46 03 56",
		email: "tthau2007 <i class='fa fa-at' /> gmail point com",
        github: "haubad.github.io",
		location: "Toulouse"
	},
	welcomeMessage: "Code, code et code",
	skills: ["<li>Java</li><li><i class='fa fa-android'/> Android</li>",
             "<li>C++</li><li>C#</li>",
             "<li>Dart</li><li>JavaScript</li>",
             "<li><i class='fa fa-html5'/> HTML</li><li><i class='fa fa-css3'/> CSS</li>"],
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

header.append(HTMLbioPic.replace("%data%", bio["pic"]))
    .append(HTMLWelcomeMsg.replace("%data%", bio["welcomeMessage"]));

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
		cat: "#work2015",
		employer: "",
		title: "Projets personnels",
		dates: "2015",
		gps: "",
		location: "Toulouse",
		url: "#",
		desc: ["<a class='a-inline' href='http://haubad.github.io/lpv/' target='_blank'>Visionneuse de photos</a> : crée un nouveau look du site <span class='tomato-text'>Light Photo Viewer</span> (<span class='fa fa-html5 fa-right'/>html5, <span class='fa fa-css3 fa-right'/>css3)", 
               "<a class='a-inline' href='http://haubad.github.io/albums/' target='_blank'>Albums</a> : visualise mes photos sur le serveur (html5, css3, javascript, jquery)"
              ]
	},
	{
		cat: "#work2015",
		employer: "",
		title: "Concours de programmation <i>Codingame</i>",
		dates: "2015",
		gps: "",
		location: "Montpellier",
		url: "http://www.codingame.com/profile/39052a18adfadaf0d5433339689daf80513391",
		desc: ["Challenge d&#39IA <i>The Great Escape</i> (06/02/2015 – 20/02/2015) (51eSUP sur 1153) (<a class='a-inline' href='http://www.dartlang.org/' target='_blank'>dart</a>)"
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
		desc: ["Challenge d&#39IA <i>Platinum Rift</i> (08/11/2014 – 26/11/2014)", 
               "Challenge <i>Battle Dev de RégionJob</i> (12/11/2014) (25eSUP sur 375; 9eSUP sur 91 développeurs Java)", 
               "Challenge d&#39IA <i>Poker Chip Race</i> (10/09/2014 – 24/09/2014) (20eSUP sur 449)", 
               "Challenge <i>Battle Dev de RégionJob</i> (10/06/2014)", 
               "Challenge <i>Skynet Finale</i> (06/05/2013)", 
               "Challenge d&#39IA <i>Game of Drones</i> (14/03/2014 – 28/03/2014)", 
               "Challenge d&#39IA <i>Tron Battle</i> (10/01/2014 – 28/02/2014) (3eSUP sur 672)"
              ]
	},
	{
		cat: "#work2014",
		employer: "",
		title: "Projets personnels (<b>Android</b>)",
		dates: "2014",
		gps: "",
		location: "Toulouse",
		url: "#",
		desc: ["<i>Bookworm</i> (en cours) : développe un jeu de mots (constituer des mots à partir des lettres disséminées à l&#39écran)", 
               "<i>Météo</i> : visualise la météo à quatorze jours", 
               "<a class='a-inline' href='http://www.amazon.com/zunedev-Exposure-Calculator-ND-Filters/dp/B00V3G3XYK/ref=sr_1_fkmr0_1?ie=UTF8&qid=1427138565&sr=8-1-fkmr0&keywords=Exposure+Calculator+%28ND+Filters%29' target='_blank'>Calculatrice d&#39exposition</a> : calcule la durée d&#39exposition en fonction du filtre neutre utilisé", 
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
		title: "Projets personnels (<b>Android</b>)",
		dates: "2013",
		gps: "",
		location: "Toulouse",
		url: "#",
		desc: ["<i>Caméra IP</i> : transforme le smartphone en caméra de surveillance sans fil"]
	},
	{
		cat: "#work2012-2013",
		employer: "Nex io",
		title: "Ingénieur d&#39études C++/C#",
		dates: "11/2012 - 01/2013",
		gps: "",
		location: "Toulouse",
		url: "#",
        list: "none",
		desc: ["<p>Faire évoluer le logiciel CEM (analyse des perturbations électromagnétiques entre appareils électroniques) (C++, C#, Windows)"]
	},
	{
		cat: "#work2012-2013",
		employer: "Infotel/Qualifrance",
		title: "Ingénieur d&#39études C",
		dates: "07/2012 - 10/2012",
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
               "<i>Lecteur de périphériques de stockage</i> (2009) : récupère des informations des périphériques de stockage (lecteurs, disques, USB) sur l&#39ordinateur (C++/CLI, Windows)"]
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
		desc: ["<p>Développer un algorithme d&#39approximation (C++, Windows)"]
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
/*var esub = $("li").each(function () {
	var content = $(this).html().replace(/eSUP/g, "<sup>e</sup>");
	$(this).html(content);
});*/
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
		gps: "Université Toulouse 3",
		location: "Toulouse",
		url: "http://www.univ-tlse3.fr/",
		major: "Informatique de l&#39Image et du Langage"
	}
];
var onlineCourses = [
    {
        title: "Programmation des applications mobiles Android",
        school: "Université du Maryland",
        dates: "26/09/2014 – 21/11/2014",
        url: "http://www.coursera.org/signature/certificate/ZMX7ZT8ABK"
    },
    {
        title: "Programmation des services Cloud pour les applications Android",
        school: "Université Vanderbilt",
        dates: "21/07/2014 – 30/09/2014",
        url: "http://www.coursera.org/signature/certificate/864QPVC9LR"
    }
];
var education = {"schools" : schools, "onlineCourses" : onlineCourses};
education.display = function () {
	education.onlineCourses.forEach(function (course) {
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = formatLink(HTMLonlineTitle, course.title, course.url);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
		var formattedOnlineUrl = formatLink(HTMLonlineURL, course.url, course.url);
		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool)
            .append(HTMLonlineDates.replace("%data%", course.dates))
            //.append(formattedOnlineUrl)
            .append(HTMLonlineDescription);
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
