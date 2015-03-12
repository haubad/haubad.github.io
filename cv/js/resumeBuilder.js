// Bio
var bio = {
	name: "hau tran",
	role: "Ingénieur d&#39études",
	contacts: {
		mobile: "06 11 46 03 56",
		email: "tthau2007 at gmail dot com",
		location: "Toulouse"
	},
	welcomeMessage: "Code, code et code",
	skills: ["java", "android", "C++", "C#", "dart", "js"],
	pic: "images/hhh.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedMobile)
	.append(formattedEmail)
	.append(formattedLocation);

var formattedPic = HTMLbioPic.replace("%data%", bio["pic"]);
var formattedMsg = HTMLWelcomeMsg.replace("%data%", bio["welcomeMessage"]);
var formattedSkillsStart = HTMLskillsStart;
$("#header").append(formattedPic);
$("#header").append(formattedMsg);

if (bio.skills.length > 0) {
	$("#header").append(formattedSkillsStart);
	bio.skills.forEach(function (skill) {
		$("#skills").append(HTMLskills.replace("%data%", skill));
	});
}

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
		description: "<ul><li><a class='a-none-style' href='http://haubad.github.io/lpv/' target='_blank'>Visionneuse de photos</a> : refait le site de l'application <span class='tomato-text'>Light Photo Viewer</span> (html5, css3)</li><li><a class='a-none-style' href='http://haubad.github.io/albums/' target='_blank'>albums</a> : crée un site pour visualiser des photos (html5, css3, js, jquery)</li></ul>"
	},
	{
		cat: "#work2015",
		employer: "",
		title: "Concours de programmation <i>Codingame</i>",
		dates: "2015",
		gps: "",
		location: "Montpellier",
		url: "http://www.codingame.com/profile/39052a18adfadaf0d5433339689daf80513391",
		description: "<ul><li>Challenge d&#39IA <i>The Great Escape</i> (06/02/2015 – 20/02/2015) (51eSUP sur 1153) (<a class='a-none-style' href='http://www.dartlang.org/' target='_blank'>Dart</a>)</li></ul>"
	},
	{
		cat: "#work2014",
		employer: "",
		title: "Concours de programmation <i>Codingame</i> (<b>Java</b>)",
		dates: "2014",
		gps: "",
		location: "Montpellier",
		url: "http://www.codingame.com/profile/39052a18adfadaf0d5433339689daf80513391",
		description: "<ul><li>Challenge d&#39IA <i>Platinum Rift</i> (08/11/2014 – 26/11/2014)</li><li>Challenge <i>Battle Dev de RégionJob</i> (12/11/2014) (25eSUP sur 375; 9eSUP sur 91 développeurs Java)</li><li>Challenge d&#39IA <i>Poker Chip Race</i> (10/09/2014 – 24/09/2014) (20eSUP sur 449)</li><li>Challenge <i>Battle Dev de RégionJob</i> (10/06/2014)</li><li>Challenge <i>Skynet Finale</i> (06/05/2013)</li><li>Challenge d&#39IA <i>Game of Drones</i> (14/03/2014 – 28/03/2014)</li><li>Challenge d&#39IA <i>Tron Battle</i> (10/01/2014 – 28/02/2014) (3eSUP sur 672)</li></ul>"
	},
	{
		cat: "#work2014",
		employer: "",
		title: "Projets personnels (<b>Android</b>)",
		dates: "2014",
		gps: "",
		location: "Toulouse",
		url: "#",
		description: "<ul><li><i>Bookworm</i> (en cours) : développe un jeu de mots (constituer des mots à partir des lettres disséminées à l&#39écran)</li><li><i>Météo</i> : visualise la météo à quatorze jours</li><li><i>Calculatrice d&#39exposition</i> : calcule la durée d&#39exposition en fonction du filtre neutre utilisé</li><li><i>Caméra IP</i> : transforme le smartphone en caméra de surveillance sans fil (via le protocole rtp)</li></ul>"
	},
	{
		cat: "#work2013",
		employer: "",
		title: "Concours de programmation <i>Codingame</i> (<b>Java</b>)",
		dates: "2013",
		gps: "",
		location: "Montpellier",
		url: "http://www.codingame.com/profile/39052a18adfadaf0d5433339689daf80513391",
		description: "<ul><li>Challenge <i>Doctor Who</i> (23/11/2013) (131eSUP sur 1251)</li><li>Challenge <i>Battle Dev de SudOuestJob</i> (05/11/2013) (26eSUP sur 168)</li></ul>"
	},
	{
		cat: "#work2013",
		employer: "",
		title: "Projets personnels (<b>Android</b>)",
		dates: "2013",
		gps: "",
		location: "Toulouse",
		url: "#",
		description: "<ul><li><i>Caméra IP</i> : transforme le smartphone en caméra de surveillance sans fil</li></ul>"
	},
	{
		cat: "#work2012-2013",
		employer: "Netio",
		title: "Ingénieur d&#39études C++/C#",
		dates: "11/2012 - 01/2013",
		gps: "",
		location: "Toulouse",
		url: "#",
		description: "<p>Faire évoluer le logiciel CEM (analyse des perturbations électromagnétiques entre appareils électroniques) (C++, C#, Windows)"
	},
	{
		cat: "#work2012-2013",
		employer: "Infotel/Qualifrance",
		title: "Ingénieur d&#39études C",
		dates: "07/2012 - 10/2012",
		gps: "Infotel 31700 Blagnac",
		location: "Toulouse",
		url: "http://www.infotel.com/",
		description: "<p>Maintenir et développer le logiciel Arcsys (archivage électronique de documents) (C, openSUSE)"
	},
	{
		cat: "#work2011-2012",
		employer: "IRAP/CNRS",
		title: "Ingénieur de recherche et développement Java",
		dates: "03/2011 - 03/2012",
		gps: "IRAP Toulouse",
		location: "Toulouse",
		url: "http://www.irap.omp.eu/observations/projets/projets/projets-tad/projet-cassis",
		description: "<p>Faire évoluer le logiciel Cassis (traitement de spectres des télescopes) (Java, Swing, ANT, Ubuntu)<p class='tab'>- un script pour générer automatiquement une version Cassis<p class='tab'>- un éditeur pour composer, compiler et exécuter des scripts Python<p class='tab'>- un module pour installer et mettre à jour le Cassis<p class='tab'>- un module pour afficher des spectres en miniature ou écran fenêtré"
	},
	{
		cat: "#work2009-2010",
		employer: "",
		title: "Projets personnels",
		dates: "2009 - 2010",
		gps: "",
		location: "Toulouse",
		url: "#",
		description: "<ul><li><a class='a-none-style' href='../lpv/' target='_blank'>Visionneuse de photos</a> (2010) : visionne des photos instantanément en plein écran, écran fenêtré ou miniature (C++, Direct2D, Windows)</li><li><i>Copieur de fichiers</i> (2009) : facilite la tâche de sauvegarde, accélère la vitesse de copie des gros fichiers et effectue également des copies en ligne de commande (C++/CLI, Windows)</li><li><i>Lecteur de périphériques de stockage</i> (2009) : récupère des informations des périphériques de stockage (lecteurs, disques, USB) sur l&#39ordinateur (C++/CLI, Windows)</li></ul>"
	},
	{
		cat: "#work2008",
		employer: "IRIT/Université Paul Sabatier Toulouse 3",
		title: "Ingénieur de recherche",
		dates: "01/2008 - 07/2008",
		gps: "IRIT Toulouse",
		location: "Toulouse",
		url: "http://www.univ-tlse3.fr/",
		description: "<p>Développer un algorithme d&#39approximation (C++, Windows)"
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
			lastWork.append(formattedWorkEmployer + " - " + formattedWorkTitle)
                    .append(HTMLworkDates.replace("%data%", job.dates))
                    .append(HTMLworkLocation.replace("%data%", job.location));
		} else {
			lastWork.append(formattedWorkEmployer + formattedWorkTitle);
		}
		lastWork.append(HTMLworkDescription.replace("%data%", job.description));
	});
};
work.display();
var esub = $("li").each(function () {
	var content = $(this).html().replace(/eSUP/g, "<sup>e</sup>");
	$(this).html(content);
});

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
	education.onlineCourses.forEach(function(course) {
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = formatLink(HTMLonlineTitle, course.title, course.url);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
		var formattedOnlineUrl = formatLink(HTMLonlineURL, course.url, course.url);
		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool)
            .append(HTMLonlineDates.replace("%data%", course.dates))
        	//.append(formattedOnlineUrl)
            .append(HTMLonlineDescription);
	});

	education.schools.forEach(function(school) {
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

// change black to white
var grays = $(".gray p").css("color", "#1F1F1F");

// Google maps
$("#mapDiv").append(googleMap);

// Footer
$("#footerContacts").append(formattedMobile)
	.append(formattedEmail)
	.append(formattedLocation);
