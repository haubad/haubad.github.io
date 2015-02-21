// Bio
var bio = {
	name : "hau tran",
	role : "Ingénieur d&#39études",
	contacts : {
		mobile : "06 11 46 03 56",
		email : "tthau2007 at gmail dot com",
		location : "Toulouse"
	},
	welcomeMessage : "Code, code et code",
	skills : ["java", "android", "C++", "C#", "dart", "js"],
	pic : "images/hhh.jpg"
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

if (bio.skills.length>0) {
	$("#header").append(formattedSkillsStart);
	bio.skills.forEach(function(skill) {
		$("#skills").append(HTMLskills.replace("%data%", skill));
	});	
}

// Wok = {jobs, display}
var jobs = [
	{
		cat : "#work2015",
		employer : "*",
		title : "Concours de programmation <i>Codingame</i> (<b>Java</b>)",
		dates : "2015",
		gps : "CodinGame Montpellier",
		location : "Montpellier",
		url : "http://www.codingame.com/profile/39052a18adfadaf0d5433339689daf80513391", 
		description : "Challenge d&#39IA <i>The Great Escape</i> (06/02/2015 – 20/02/2015) (52eSUP sur 1153) (<a class='a-no-style' href='http://www.dartlang.org/'>Dart</a>)"
	},
	{
		cat : "#work2014",
		employer : "*",
		title : "Concours de programmation <i>Codingame</i> (<b>Java</b>)",
		dates : "2014",
		gps : "CodinGame Montpellier",
		location : "Montpellier",
		url : "http://www.codingame.com/profile/39052a18adfadaf0d5433339689daf80513391", 
		description : "Challenge d&#39IA <i>Platinum Rift</i> (08/11/2014 – 26/11/2014)<br>Challenge <i>Battle Dev de RégionJob</i> (12/11/2014) (25eSUP sur 375; 9eSUP sur 91 développeurs Java)<br>Challenge d&#39IA <i>Poker Chip Race</i> (10/09/2014 – 24/09/2014) (20eSUP sur 449)<br>Challenge <i>Battle Dev de RégionJob</i> (10/06/2014)<br>Challenge <i>Skynet Finale</i> (06/05/2013)<br>Challenge d&#39IA <i>Game of Drones</i> (14/03/2014 – 28/03/2014)<br>Challenge d&#39IA <i>Tron Battle</i> (10/01/2014 – 28/02/2014) (3eSUP sur 672)"
	},
	{
		cat : "#work2014",
		employer : "*",
		title : "Développeur à titre personnel (<b>Android</b>)",
		dates : "2014",
		gps : "",
		location : "Toulouse",
		url : "#", 
		description : "<i>Bookworm</i> (en cours) : développe un jeu de mots (constituer des mots à partir des lettres disséminées à l&#39écran)<br><i>Météo</i> : visualise la météo à quatorze jours<br><i>Calculatrice d&#39exposition</i> : calcule la durée d&#39exposition en fonction du filtre neutre utilisé<br><i>Caméra IP</i> : transforme le smartphone en caméra de surveillance sans fil (via le protocole rtp)"
	},
	{
		cat : "#work2013",
		employer : "*",
		title : "Concours de programmation <i>Codingame</i> (<b>Java</b>)",
		dates : "2013",
		gps : "CodinGame Montpellier",
		location : "Montpellier",
		url : "http://www.codingame.com/profile/39052a18adfadaf0d5433339689daf80513391", 
		description : "Challenge <i>Doctor Who</i> (23/11/2013) (131eSUP sur 1251)<br>Challenge <i>Battle Dev de SudOuestJob</i> (05/11/2013) (26eSUP sur 168)"
	},
	{
		cat : "#work2013",
		employer : "*",
		title : "Développeur à titre personnel (<b>Android</b>)",
		dates : "2013",
		gps : "",
		location : "Toulouse",
		url : "#", 
		description : "<i>Caméra IP</i> : transforme le smartphone en caméra de surveillance sans fil"
	},
	{
		cat : "#work2012-2013",
		employer : "Netio",
		title : "Ingénieur d&#39études C++/C#",
		dates : "11/2012 - 01/2013",
		gps : "Netio Toulouse",
		location : "Toulouse",
		url : "#", 
		description : "Evolution du logiciel CEM (analyse des perturbations électromagnétiques entre appareils électroniques) (C++, C#, Windows)"
	},
	{
		cat : "#work2012-2013",
		employer : "Infotel/Qualifrance",
		title : "Ingénieur d&#39études C",
		dates : "07/2012 - 10/2012",
		gps : "Infotel 31700 Blagnac", 
		location : "Toulouse",
		url : "http://www.infotel.com/",
		description : "Maintenance et développement du logiciel Arcsys (archivage électronique de documents) (C, openSUSE)"
	},
	{
		cat : "#work2011-2012",
		employer : "IRAP/CNRS",
		title : "Ingénieur de recherche et développement Java",
		dates : "03/2011 - 03/2012",
		gps : "IRAP Toulouse",
		location : "Toulouse",
		url : "http://www.irap.omp.eu/",
		description : "Evolution du logiciel Cassis (traitement de spectres des télescopes) (Java, Swing, ANT, Ubuntu)<br>Evolution d&#39un script existant pour générer automatiquement une version Cassis<br>Développement d’un éditeur pour composer, compiler et exécuter des scripts Python<br>Développement d&#39un module pour installer et mettre à jour le Cassis<br>Développement d&#39un module pour afficher des spectres en miniature ou écran fenêtré"
	},
	{
		cat : "#work2009-2010",
		employer : "*",
		title : "Développeur à titre personnel",
		dates : "07/2012 - 10/2012",
		gps : "", 
		location : "Toulouse",
		url : "#",
		description : "<i>Visionneuse de photos</i> (2010) : visionne des photos instantanément en plein écran, écran fenêtré ou miniature (C++, Direct2D, Windows)<br><i>Copieur de fichiers</i> (2009) : facilite la tâche de sauvegarde, accélère la vitesse de copie des gros fichiers et effectue également des copies en ligne de commande (C++/CLI, Windows)<br><i>Lecteur de périphériques de stockage</i> (2009) : récupère des informations des périphériques de stockage (lecteurs, disques, USB) sur l&#39ordinateur (C++/CLI, Windows)"
	},
	{
		cat : "#work2008",
		employer : "IRIT/Université Paul Sabatier Toulouse 3",
		title : "Ingénieur de recherche",
		dates : "01/2008 - 07/2008",
		gps : "IRIT Toulouse",
		location : "Toulouse",
		url : "http://www.univ-tlse3.fr/",
		description : "Conception et développement des algorithmes d&#39approximation (C++, Windows)"
	}
];
var work = {"jobs": jobs};
work.display = function() {
	work.jobs.forEach(function(job) {
		var workCat = job.cat;
		$(workCat).append(HTMLworkStart);
		var formattedWorkEmployer = formatLink(HTMLworkEmployer, job.employer, job.url);

		var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
		$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);

		$(workCat).append(HTMLworkDates.replace("%data%", job.dates))
			.append(HTMLworkLocation.replace("%data%", job.location));

		$(workCat).append(HTMLworkDescription.replace("%data%", job.description));
	});
}
work.display();
var esub = $("p").each(function(){
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
		name : "IRIT/Université Paul Sabatier Toulouse 3",
		degree : "Doctorat",
		dates : "10/2003 - 12/2007",
		gps : "IRIT Toulouse",
		location : "Toulouse",
		url : "http://www.univ-tlse3.fr/",
		major : "Intelligence Artificielle"
	}, 
	{
		name : "IRIT/Université Paul Sabatier Toulouse 3",
		degree : "Master 2",
		dates : "10/2002 - 06/2003",
		gps : "Université Toulouse 3",
		location : "Toulouse",
		url : "http://www.univ-tlse3.fr/",
		major : "Informatique de l&#39Image et du Langage"
	}
];
var onlineCourses = [
 	{
 		title : "Programmation des applications mobiles pour Android",
 		school : "Université du Maryland",
 		dates : "26/09/2014 – 21/11/2014",
 		url : "http://www.coursera.org/signature/certificate/ZMX7ZT8ABK"
 	},
 	{
 		title : "Programmation des services de cloud pour les applications Android",
 		school : "Université Vanderbilt",
 		dates : "21/07/2014 – 30/09/2014",
 		url : "http://www.coursera.org/signature/certificate/864QPVC9LR"
 	}
];
var education = {"schools" : schools, "onlineCourses" : onlineCourses};
education.display = function() {
	education.onlineCourses.forEach(function(course) {
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = formatLink(HTMLonlineTitle, course.title, course.url);

		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

		$("#education").append(HTMLonlineDates.replace("%data%", course.dates));

		var formattedOnlineUrl = formatLink(HTMLonlineURL, course.url, course.url);
		//$("#education").append(formattedOnlineUrl);
		$("#education").append(HTMLonlineDescription);
	});

	education.schools.forEach(function(school) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", school["name"]);
		formattedSchoolName = formattedSchoolName.replace("#", school["url"]);

		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school["degree"]);
		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

		$("#education").append(HTMLschoolDates.replace("%data%", school["dates"]))
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
