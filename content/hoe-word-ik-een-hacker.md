---
title: Hoe word ik een hacker
nodateline: true
noprevnext: true
disable_comments: true
menu:
  main:
    parent: "info"
    weight: 50
  footer:
    weight: 3
---

Verschijningsdatum : 7 April 2001 Auteur : Eric Steven Raymond [esr@thyrsus.com] Vertaling vanuit Revisie 1.7. Naar versie 1.50 gebracht door Dave Borghuis 28 Feb 2016

Deze tekst is een Nederlandse vertaling van de originele tekst geschreven door Eric S. Raymond. Het gebruik van woorden zoals "ik", "mijn" e.d. slaan dus terug op Eric S. Raymond. De originele Engelse tekst kan je terug vinden op http://www.catb.org/esr/faqs/hacker-howto.html

<img alt="Hacker Glider" src="/images/glider.png"  style="display: block;margin-left: auto; margin-right: auto;width: 20%;">



## Waarom dit document?
Als redacteur van het "Jargon File" en van een aantal andere bekende documenten van gelijke aard, krijg ik vaak emails van enthousiaste "netwerk newbies" die vragen "Hoe kan ik leren om een wizard hacker te zijn?". Raar genoeg blijken er geen FAQ's of andere documenten te zijn die deze vitale vraag proberen te beantwoorden, vandaar deze poging.

Als je een momentopname van dit document offline leest, kan je de laatste versie terug vinden op http://www.catb.org/esr/faqs/hacker-howto.html .

Noot: Er is een lijst met "Frequently Asked Questions" opgenomen aan het einde van deze tekst. Gelieve deze twee maal te lezen alvorens mij vragen te stellen over dit document.

Er zijn talrijke vertalingen van dit document beschikbaar, o.a. in het: Bulgaars, Chinees (Simpel), Chinees (Traditioneel), Deens, Nederlands, Frans, Fins, Duits, Hongaars, Italiaans, Indonesisch, Japans, Koreaans, Portugees, Russisch, Spaans en Zweeds. Merk op dat, omdat dit document regelmatig wijzigt, de vertalingen in verschillende versies achter kunnen lopen.

De vijf cirkels in de vierkant afbeelding bovenaan dit document wordt een 'glider' genoemd. Dit is een patroon met enkelen verrassende eigenschappen in een mathematische simulatie dat 'Live' heet en hacker fascineert. Ik denk dat dit een goed visueel symbool is voor wat hacker zijn in het leven - abstract, in het beging mysterieus, maar een gateway naar de een eigen wereld met een intrinsieke logica. Lees meer over de glider hier.

Indien je dit document waardevol vind, support me op Patreon. Overweeg om ook andere hackers te ondersteunen die code hebben gemaakt die jij gebruikt en waardeert. Veel kleine donaties tikken aan. Met een donatie kunnen de mensen die hun werk hebben gestoken in een product dat jij gebruikt weer meer waarde maken.


<img alt="Hacker Glider" src="/images/glider.png"  style="display: block;margin-left: auto; margin-right: auto;width: 20%;">

### Wat is een Hacker?
Het "Jargon File" bevat een hoop definities van de term "hacker". De meesten hebben te maken met technische bedrevenheid en het vermaak in problemen oplossen en overwinnen van limieten. Als je wil weten hoe men een hacker wordt, dan zijn er eigenlijk maar twee definities echt relevant.

Er bestaat een gemeenschap, een gedeelde cultuur, van programmeerexperten en netwerk wizards, die tientallen jaren geleden ontstaan is en teruggaat tot de tijd van de eerste time-sharing minicomputers en de vroegste ARPAnet experimenten. De leden van deze cultuur bedachten de term "hacker". Hackers bouwden het Internet. Hackers maakten het Unix besturingssysteem tot hetgeen het vandaag is. Hackers houden het Usenet draaiende. Hackers zorgen dat het "World Wide Web" werkt. Als je deel uitmaakt van deze cultuur, als je hiertoe hebt bijgedragen en anderen weten wie je bent en ze noemen je een hacker, dan ben je een hacker.

De hacker-denkwijze is niet beperkt tot deze software-hacker cultuur. Er zijn mensen die de hacker houding op andere dingen toepassen, zoals elektronica of muziek. Eigenlijk kan je deze houding vinden op alle hoogste niveaus van wetenschappen of kunst. Software hackers herkennen deze verwante "geest" bij anderen en kunnen hen ook "hackers" noemen -- Sommigen claimen dat "het hacker zijn" eigenlijk onafhankelijk is van het medium waarin de hacker werkt. Maar in dit document zullen we het vooral hebben over de vaardigheden en houdingen van software hackers, en de tradities van de gedeelde cultuur waarin de term "hacker" ontstaan is.

Er is ook een andere groep mensen die zichzelf luidkeels hackers noemen, maar dit eigenlijk niet zijn. Dit zijn mensen (meestal mannelijke adolescenten) die een kick krijgen van het inbreken in computers en telefoonsystemen. Echte hackers noemen deze mensen "crackers" en willen helemaal niets met deze mensen te maken hebben. Echte hackers denken vooral dat crackers lui, onverantwoordelijk en niet erg slim zijn. In staat zijn om een beveiliging te omzeilen, maakt je evenveel een hacker, als in staat zijn een auto te starten zonder sleutels je een automobiel ingenieur maakt. Spijtig genoeg zijn vele journalisten en schrijvers erin geluisd om het woord "hacker" te gebruiken om crackers te beschrijven.; Dit irriteert echte hackers mateloos.

Het verschil komt hierop neer: Hackers bouwen dingen op, crackers breken ze af.

Als je een hacker wil worden, blijf lezen. Als je een cracker wil zijn, lees dan de alt.2600 nieuwsgroep en bereid je voor op vijf tot tien jaar cel, waarin je kan beseffen dat je niet zo slim was als je wel dacht. En dat is alles wat ik over crackers ga zeggen.


<img alt="Hacker Glider" src="/images/glider.png"  style="display: block;margin-left: auto; margin-right: auto;width: 20%;">

## De Hacker houding
Hackers lossen problemen op en bouwen dingen. Ze geloven in vrijheid en vrijwillige wederzijdse hulp. Om geaccepteerd te worden als hacker, moet je je gedragen alsof je deze houding uit jezelf hebt. En om je zo te gedragen, moet je echt geloven in deze houding.

Als je denkt dat het aankweken van hacker houding gewoon een manier is om geaccepteerd te worden in de cultuur, dan snap je het niet. De persoon worden die deze dingen gelooft is belangrijk voor jou: Door te helpen leer je bij en blijf je gemotiveerd. Zoals in alle creatieve kunsten is de meest effectieve manier om een meester te worden, het imiteren van de denkwijze van de meesters - niet enkel intellectueel, maar ook emotioneel.

Of, zoals het volgende Zen gedicht het zegt:

<pre>
Om het pad te volgen:
kijk je naar de meester,
volg je de meester,
loop je mee met de meester,
doorzie je de meester,
word je de meester.
Aldus, als je een hacker wil worden, herhaal je deze dingen totdat je ze gelooft.
</pre>
#### De wereld zit vol met fascinerende problemen die wachten om opgelost te worden.
Een hacker zijn, staat garant voor een hoop plezier, maar het is het soort plezier dat veel moeite kost. Deze moeite vereist motivatie. Een succesvol atleet krijgt zijn motivatie van een soort fysiek genot door zijn lichaam te laten werken, harder, zijn eigen fysieke grenzen verleggend. Analoog, moet een hacker zijn genot krijgen door het oplossen van problemen, het aanscherpen van vaardigheden, en het uitoefenen van intelligentie.

Als je niet de persoon bent waarbij dit als natuurlijk aanvaard wordt, dan moet je zo'n persoon worden. Anders zal je merken dat je hack-energie gesloopt wordt door afleidingen zoals seks, geld en maatschappelijke goedkeuring.

(Je moet ook een soort van geloof in je eigen leercapaciteit ontwikkelen -- een geloof dat, zelfs al weet je niet alles om een probleem op te lossen, je toch helpt om een gedeelte op te lossen. Uit dit deel kan je genoeg leren om het volgende deelprobleem op te lossen, enzovoort, totdat het geheel opgelost is.)

#### Niemand zou ooit een probleem twee maal moeten oplossen.
Een creatief brein is een waardevolle, beperkte bron. Deze moet niet verspild worden aan het heruitvinden van het wiel als er nog zo veel fascinerende nieuwe problemen te wachten staan.

Om je als een hacker te gedragen, moet je geloven dat de "denk-tijd" van andere hackers waardevol is - zo waardevol dat het bijna een morele taak is om informatie te delen, problemen op te lossen en de oplossingen aan andere hackers te geven zodat zij nieuwe problemen kunnen oplossen in plaats van zich eeuwig en opnieuw met de oude bezig te houden.

Je moet niet geloven dat je verplicht bent om jou creatief product helemaal weg te geven. Alhoewel de hackers die dit wel doen, het meeste respect van andere hackers krijgen. Het is consistent met de hacker waarden, om genoeg "oplossingen" te verkopen om je eten, onderdak en computer van te betalen. Het is natuurlijk mooi meegenomen als je je gezin ermee kunt onderhouden of zelfs mee rijk mee kan worden, zolang je maar de loyaliteit voor de kunst en de andere hackers niet vergeet.

### Verveling en eentonig werk zijn des duivels.
Hackers (en creatieve mensen in het algemeen) zouden zich nooit mogen vervelen of zich uitsloven met onnozel repetitief werk omdat, wanneer zij dit wel doen, ze niet kunnen doen hetgeen zij alleen kunnen doen: nieuwe problemen oplossen. Deze verspilling raakt iedereen. Daarom zijn verveling en eentonig werk niet alleen onplezierig, maar eigenlijk des duivels.

Om je te gedragen zoals een hacker, moet je dit sterk geloven, sterk genoeg om de saaie of repetitieve stukken te automatiseren, niet alleen voor jezelf, maar ook voor anderen. (Vooral voor andere hackers).

(Er is blijkbaar één voor de hand liggende uitzondering. Hackers zullen soms dingen doen die repetitief of saai lijken voor de waarnemer als een soort van geest verfrissende oefening, of om een vaardigheid of een ervaring op te doen die je niet op een andere manier kan beleven. Maar dit is hun keuze, niemand met hersenen zou ooit gedwongen mogen worden in een situatie die hem verveeld.)

### Vrijheid is goed.
Hackers zijn van nature antiautoritair. Iedereen die jou bevelen kan geven, kan je dwingen te stoppen met het oplossen van problemen waardoor je gefascineerd bent. En, rekeninghoudend met de manier waarop een autoritair brein werkt, een ijzingwekkend onnozele reden hiervoor vinden. Een autoritair houding zal dus altijd en overal bestreden moeten worden, zodat dit jou en de andere hackers het zwijgen niet kan opleggen.

(Dit is niet hetzelfde als alle autoriteit weren. Kinderen moeten begeleid worden en criminelen gestraft. Een hacker kan akkoord gaan met sommige vormen van autoriteit om iets te bereiken dat het waard is om bevelen op te volgen. Maar dit is gelimiteerd, een gezonde ruil. De persoonlijke overgave die autoritairen willen, komt niet ter sprake.)

Autoritairen gedijen op censuur en geheimhouding. Ze wantrouwen vrijwillige hulp en uitwisseling van informatie. Ze houden enkel van "medewerking" die zij controleren. Je gedragen als een hacker, zal je een instinctieve vijandigheid opleveren voor censuur, geheimhouding, en het gebruik van geweld en bedrog om verantwoordelijke volwassenen te dwingen. Jij moet willen en durven te reageren voor dit geloof.

### Houding is geen vervangmiddel voor competentie.
Om een hacker te zijn, moet je enkele van deze houdingen aankweken. Maar enkel houdingen zal je evenveel in een hacker veranderen als het je in een atleet of een rock star zal veranderen. Om een hacker te worden heb je intelligentie, oefening en toewijding nodig. En dat kost je veel werk.

Je moet dus leren om houding te wantrouwen en iedere vorm van competentie te respecteren. Hackers zullen geen tijd verspillen met "acteurs", maar zij aanbidden vakkundigheid, vooral vakkundigheid in het hacken, maar alle vakkundigheid is goed. Een vakkundigheid in bepaalde gebieden die moeilijk zijn om aan te leren is zeer goed, en een vakkundigheid met veeleisende vaardigheden die veel mentale accuraatheid, ambacht en concentratie vereisen is het beste.

Als je vakkundigheid vereert, zal je het zelf ontwikkelen. Het harde werk en de dedicatie zullen een soort van intens spel worden in plaats van eentonig werk. En dat is vitaal om een hacker te worden.


<img alt="Hacker Glider" src="/images/glider.png"  style="display: block;margin-left: auto; margin-right: auto;width: 20%;">
### Basis Hack-vaardigheden
Een hacker houding is vitaal, maar vaardigheden zijn nog vitaler. Houding is geen vervangmiddel voor competentie, en er is een zekere basis van vaardigheden die je moet hebben voordat een echte hacker er ook maar aan denkt om je een hacker te noemen.

Deze basis verandert traag met de tijd wanneer technologie nieuwe vaardigheden creëert en oude overbodig maakt. Bijvoorbeeld: Vroeger was programmeren in machinecode een vereiste, maar tot recentelijk geen enkele HTML. Vandaag de dag komen de vaardigheden hier op neer:

### Leer programmeren.
Dit is vanzelfsprekend een fundamentele hack-vaardigheid. Als je geen enkele programmeertaal kent, raad ik je aan om met Python te beginnen. Het is goed ontworpen, goed gedocumenteerd en relatief eenvoudig voor beginners. Ondanks het feit dat het een goede eerste taal is, is het niet zomaar een speelgoedje: het is erg krachtig en flexibel en erg geschikt voor grote projecten. Ik heb een meer gedetailleerde Python evaluatie geschreven. Een handleiding is beschikbaar op de Python website.

Voorheen adviseerde ik Java als een goede taal om als eerste te leren, maar commentaar[1] hierop heeft me van gedachten laten veranderen. Een hacker kan niet zoals het zeggen "Als je een hamer hebt, lijkt alles een spijker'"; je moet weten wat de componenten daadwerkelijk doen. Nu denk ik dat het beste is om C en Lisp eerst te leren en dan Java.

Er is misschien een algemeen punt hier. Als een taal te veel voor je doet kan dit goed voor je productie zijn en slecht voor het leren van een taal. Java is niet de enige taal met dit probleem; web frameworks zoals RubyOnRails, CakePHP, Django maken het te eenvoudig om een oppervlakkig basis begrip dat je niet de diepgang geeft als je een moeilijk probleem moet oplossen, of zelfs het debuggen van een eenvoudig probleem.

Als je serieus wil gaan programmeren, moet je C leren, de kerntaal van Unix. C++ is nauw verwant met C. Als je al een van de twee kent, is het leren van de andere niet moeilijk. Geen van de twee talen is echter geschikt om mee te beginnen.

Andere talen die van belang zijn voor hackers zijn Perl en LISP. Perl is de moeite waard om te leren voor praktische redenen: Het wordt vaak gebruikt voor actieve pagina's en voor systeembeheer. Dus ook al ga je nooit een programma in Perl schrijven, je zou toch in staat moeten zijn om Perl code te lezen. LISP is de moeite waard om te leren voor de diepe verlichtende ervaring die het met zich meebrengt. Deze ervaring zal je een betere programmeur maken voor de rest van je dagen, zelfs al gebruik je LISP bijna nooit.

Eigenlijk is het het beste om alle vijf deze talen te leren (Python, Java, C/C++, Perl en LISP). Behalve het feit dat deze de belangrijkste hack programmeertalen zijn, representeren ze zeer verschillende toenaderingen tot het programmeren, en elk van deze talen zal waardevolle dingen bijdragen.

Ik kan geen complete instructies geven over hoe je moet leren programmeren: het is een complexe vaardigheid. Maar ik kan wel vertellen dat boeken en cursussen het niet zullen doen (Vele, misschien zelfs de meeste hackers hebben het uit zichzelf geleerd.) Je kunt de taal features - stukjes kennis - wel leren uit boeken, maar de denkwijze die de kennis tot een levendige vaardigheid maakt kun je enkel leren door oefening en leercontacten. Wat je moet doen is (a) code lezen en (b) code schrijven.

Peter Norvig, een van de Google's beste hackers en co-autheur van het meest gebruikte leerboek over AI (Kunstmatige Intelligentie), heeft een essay geschreven "Teach Yourself Programming in Ten Years". Zijn "recept voor programmeer succes" is je aandacht meer dan waard.

Leren programmeren is zoals het leren van een gewone taal. De beste manier om het te doen is wat dingen te lezen van meesters in het vak, een paar dingen proberen te schrijven, een pak meer te lezen, een beetje schrijven, weer veel te lezen, weer een beetje schrijven ... Herhaal dit totdat je een soort van kracht en kunde bereikt die lijkt op hetgeen je in je modellen ziet.

Goede code vinden om te lezen was vroeger moeilijk, omdat er weinig grote programma's als broncode beschikbaar waren voor beginnende hackers om te lezen en mee te "spelen". Dit is drastisch veranderd: Open-source software, Programmeer tools en besturingssystemen (allen gebouwd door hackers) zijn nu overal beschikbaar. Hetgeen mooi aansluit met het volgende onderwerp...

#### Haal een van de open-source Unixes en leer het gebruiken.
Ik neem aan dat je een PC hebt en toegang kan krijgen tot deze (Wat is het toch zo gemakkelijk vandaag :-) ). De belangrijkste eerste stappen die elke newbie kan nemen om hacker vaardigheden te verwerven is een kopie bemachtigen van Linux, of een ander BSD-Unix, het te installeren en deze te gebruiken.

Ja, er is zijn andere besturingssystemen in de wereld dan Unix, maar deze worden binair verspreid: je kan de code niet lezen, en niet wijzigen. Met een DOS, Windows machine of MacOs leren hacken, is zoals leren dansen met een harnas.

Trouwens, Unix is het besturingssysteem van het Internet. Alhoewel je het Internet kan leren gebruiken zonder Unix te kennen, kun je geen Internet hacker zijn zonder Unix te begrijpen. Voor deze reden is de hacker cultuur vandaag de dag sterk Unix-gecentreerd. (Dit was niet altijd zo, en sommige hackers van de oude garde zijn hier nog steeds niet blij mee, maar de symbiose tussen Unix en het Internet is zo sterk geworden, dat zelfs Microsoft hier niet echt een vinger in de pap krijgt.

Dus, haal Unix in huis - Ik houd persoonlijk van Linux, maar er zijn andere (En ja, het is mogelijk om Linux en DOS/Windows op dezelfde machine te hebben). Leer het. Gebruik het. Speel ermee. Ga ermee op Internet. Lees de code. Wijzig de code. Je zal met het besturingssysteem programmeer tools krijgen (inclusief C, LISP, Python en Perl). Tools, zo krachtig, dat Windows gebruikers hier enkel van kunnen dromen. Je zal plezier hebben en meer kennis opslorpen dan je je realiseert totdat je op een dag terug kijkt als een meester hacker.

Om Unix te leren: The Loginataka. Kijk ook naar The Art of Unix Programming.

De blog 'Go Larval!' is een venster op het leerproces van een nieuwe Linux gebruiker dat helder en eenvoudig uitlegt. De post 'How I Learned Linux' is een goede startpunt.

Om een Linux te krijgen ga naar 'Linux Online!' site, waar je een versie kunt downloaden of ga naar je lokale Linux gebruikers groep om je te helpen met de installatie.

Gedurende de eerste jaren van deze HOWTO's gaf ik aan dat voor een nieuwe gebruiker alle Linux distributies vrijwel gelijk waren. Maar sinds 2006-2007 is er een duidelijke eerste keus : Ubuntu. Terwijl de andere distributies hun eigen sterke punten hebben is Unbuntu verreweg de meest toegankelijke distributie voor Linux newbies. Pas echter op, Unbuntu gebruikt zijn eigen grafische interface 'Unity' als default, de Xubuntu or Kubuntu varianten zijn beter.

Je vindt BSD Unix en broncode op www.bsd.org.

Een goede manier om te begingen is wat men noemt 'Live CD', een distributie die helemaal draait vanuit de CD zonder dat het je HD wijzigt. Het is wat traag maar is wel de beste manier om de mogelijkheden te testen zonder dat je drastische aanpassingen hoeft te doen.

Ik heb een beginsel geschreven over de basis van Unix en het Internet.

Vandaag de dag zijn de installatie procedures goed genoeg om als newbie zelfstandig te doen. (maak wel een backup !) Bezoek je locale Linux gebruikers groep om contact te maken en vragen te stellen. Het kan geen kwaad en zou het proces wat soepeler maken.


### Leer het World Wide Web gebruiken en HTML te schrijven.
De meeste dingen uit de hacker cultuur gebeuren achter te schermen. Ze helpen fabrieken, kantoren en universiteiten zonder enige impact op de manier waarop niet-hackers leven. Het Web is een zeer grote uitzondering, het grote glimmende hacker speelgoed waarvan zelfs de politiek durven toegeven dat het de wereld veranderd. Om deze reden alleen al (en een hoop andere) moet je leren hoe je op het Web werkt.

Dit wil niet zeggen dat je moet leren hoe je een browser gebruikt (iedereen kan dat), maar je moet leren hoe je HTML schrijft, de opmaaktaal van het Web. Als je niet kan programmeren, dan zal het schrijven van HTML je een aantal mentale gewoonten leren die je zullen helpen. Bouw een homepage. (Er zijn goede beginners handleidingen op het Web, hier is er eentje.)

Maar enkel door een homepage te hebben, kom je niet eens in de buurt om een hacker te worden. Het Web staat vol met homepages. De meesten staan vol met zinloze, inhoudsloze rotzooi - misschien mooie grafische rotzooi, maar toch nog steeds rotzooi. (Voor meer zie The HTML Hell Page).

Om de moeite waard te zijn, moet je pagina inhoud hebben - Het moet interessant zijn en/of nuttig voor andere hackers. En dat brengt ons weer bij het volgende onderwerp...


### Leer goed Engels
Als een Amerikaan en native Engels spreker, was ik onwillig om dit te suggereren, uit vrees dat dit als een soort culturele imperialisme word gezien. Maar verscheidene anderstaligen hebben me gewezen op dat Engels de werktaal is van hacker cultuur en het internet, je hebt dit nodig om te kunnen functioneren in de hacker community.

Rond 1991 leerde is dat vele hacker die Engels als tweede taal heeft gebruiken om technische discussie te voeren zelfs als zij beide dezelfde moedertaal spreken; volgens hun heeft Engels een rijkere technische vocabulaire dan elke andere taal en is daarom simpelweg de beste gereedschap 'for the job'. Om gelijke redenen zijn vertalingen van technische boeken in het Engels meestal onbevredigend vertaald.

Linus Torvalds, een Fin, schrijft zijn commentaar in het Engels (het is bij hem nooit opgekomen om dit anders te doen). Zijn vloeiend Engels is een belangrijke factor geweest voor het werven van een wereldwijde community ontwikkelaars voor Linux. Een voorbeeld om te volgen.

Een moedertaal Engels geeft geen garantie dat je taal vaardigheid voldoende is om te kunnen functioneren als hacker. Als je schrijven semi-geletterd, ongrammaticaal en vol met fouten, vele hackers (inclusief mezelf) zou je negeren. Slecht schrijven maakt je nog niet een slechte denker, is er meestal een sterke correlatie. Als je niet goed kunt schrijven leer dit.


<img alt="Hacker Glider" src="/images/glider.png"  style="display: block;margin-left: auto; margin-right: auto;width: 20%;">
### Status in de Hacker cultuur
Zoals de meeste culturen zonder een geldelijke economie, draait het "hackerrijk" rond reputatie. Je probeert om interessante problemen op te lossen. Hoe interessant deze zijn en hoe goed jouw oplossingen zijn is enkel aan jouw technische equivalenten of superieuren om te beoordelen.

Overeenkomstig, als je het hacker spel speelt, dan leer je om jouw score bij te houden door hetgeen andere hackers denken van jouw vaardigheden (Dit is ook waarom je niet echt een hacker bent voordat anderen je herhaaldelijk zo betitelen.) Dit feit wordt overschaduwd door het beeld dat hacken een eenzaam werk is, en een oud hacker-cultuur taboe (Langzaam verdwijnt deze taboe, maar ze is er nog steeds): niet toegeven dat ego en externe bevestiging betrokken zijn bij iemands motivatie.

Specifiek, het "hackerrijk", is wat antropologen een geschenk cultuur noemen. Je wint niet aan reputatie door anderen te domineren, of door mooi te zijn, noch door dingen te hebben die anderen willen, maar door dingen weg te geven. Vooral door jouw tijd, creativiteit en resultaten van je vaardigheden weg te schenken.

Er zijn praktisch vijf soorten dingen die je kan doen om gerespecteerd te worden door hackers:

### Schrijf open-source software
Het eerste (en het meest centrale en traditionele) is om programma's te schrijven waarvan andere hackers denken dat ze nuttig zijn en de broncode aan de gehele hacker cultuur te geven.

(We noemden dit vroeger "free software", maar dit was verwarrend voor vele mensen omdat ze niet zeker waren wat "free" betekende (vrij of gratis). Velen prefereren nu de term "open-source" software).

De "half-goden" van het "hackerrijk" zijn de mensen die grote, bruikbare programma's hebben geschreven van algemeen nut en die dan gratis weg hebben gegeven zodat nu iedereen deze programma's kan gebruiken.

Maar er is hier een fijne historische punt. Terwijl hackers altijd hebben opgekeken naar de opensource ontwikkelaars als de harde kern van de community, voor de midden jaren 90 werkten de meeste hackers aan closed source. Dit was wanneer ik de eerste versie van deze FAQ schreef ; vanaf 1997 is opensource meer mainstream en is dit gewijzigd. Vandaag de dag is de 'hacker community' en de 'open source ontwikkelaar' in essentie dezelfde cultuur en gemeenschap - maar het is de moeite waard om te herinneringen dat dit niet altijd zo was. Voor meer informatie zie het hoofdstuk "Historische noot : Hacken, Open Source en Free Source".

#### Help door het testen en het debuggen van open-source software
Ook degenen die open-source software helpen debuggen, helpen. In deze onperfecte wereld, spenderen we onvermijdelijk de meeste ontwikkelingstijd aan het debuggen van software. Dit is waarom iedere open-source auteur die nadenkt, zal zeggen dat goede beta-testers (degenen die symptomen helder omschrijven, problemen goed kunnen lokaliseren, fouten kunnen tolereren in een "quickie release", en een paar diagnostische routines willen uitvoeren), hun gewicht in goud waard zijn. Zelfs slechts één van hen kan het verschil maken tussen een debug fase die een lange, uitputtende nachtmerrie wordt, of eentje die slechts voor een kleine, heilzame overlast zorgt.

Als je een newbie bent, probeer dan een programma (dat je interesseert) in ontwikkeling te vinden en wordt een goede beta-tester. Er is een natuurlijke evolutie in het helpen bij programma's: van testen, via debuggen tot uiteindelijk het wijzigen ervan. Je zal een hoop leren op deze manier, en een goed "karma" ontwikkelen met mensen die je later verder zullen helpen.

### Publiceer nuttige informatie
Een ander goed ding om te doen, is om interessante en nuttige informatie te verzamelen en te filteren tot web pagina's of andere documenten zoals "Frequently Asked Questions" (FAQ's) en deze dan door iedereen beschikbaar maken.

De makers van grote technische FAQ's, krijgen bijna evenveel respect als open-source auteurs.

### Help de infrastructuur draaiende te houden
De hacker-cultuur (en per definitie dus ook de ontwikkelingsafdeling van het Internet) bestaat uit vrijwilligers. Er is een hoop noodzakelijk, maar onaantrekkelijk werk dat gedaan moet worden om dingen draaiende te houden. Zoals het beheren van mailinglijsten, het modereren van nieuwsgroepen, het onderhouden van grote software archieven, het opstellen van RFC's en andere technische standaarden.

De mensen die zo'n soort werk doen krijgen zeer veel respect, want iedereen weet dat deze dingen enorm veel tijd in beslag nemen en niet zo leuk zijn als het spelen met code. Dit soort dingen doen geeft blijk van dedicatie.

### Dien de hacker cultuur zelf
Als laatste kan je de cultuur zelf dienen en uitbreiden (Door, bijvoorbeeld, een tekst te schrijven over hoe je een hacker wordt :-) ). Dit is niet iets dat je onmiddellijk kan doen. Je moet al een tijdje aanwezig zijn en bekend worden door één van de bovenstaande dingen eerst te doen.

De hacker cultuur zelf heeft geen leiders, maar wel helden, stamouderen, historici en woordvoerders. Wanneer je je lang genoeg in de loopgraven begeeft, kan je zo iemand worden. Let op: Hackers wantrouwen ego in hun stamouderen, dus zichtbaar streven naar zo'n titel is gevaarlijk. In plaats van ernaar te streven, moet je zorgen dat je toevallig op zo'n plaats beland, en dan eerlijk en genadig blijven over je status.


<img alt="Hacker Glider" src="/images/glider.png"  style="display: block;margin-left: auto; margin-right: auto;width: 20%;">

### De Hacker/Nerd connectie
In tegenstelling tot de populaire mythe, hoef je geen nerd te zijn om een hacker te worden. Het help wel, in vele gevallen zijn hackers in feite nerds. Sociaal uit de boot vallen helpt je geconcentreerd te blijven op de belangrijke dingen zoals denken en hacken.

Omwille van deze reden nemen vele hackers de term "nerd" of zelfs het ergere "geek" als een naamkaartje van trots: Het is een manier om hun onafhankelijkheid van normale sociale verwachtingen uit te drukken.

Als je het klaarspeelt om je te concentreren op hacken en ook nog een sociaal leven te hebben, dan is dat goed. Dit is nu veel eenvoudiger dan toen ik een newbie was in de jaren '70, toen het volk een stuk onvriendelijker was tegen techno-nerds. Er is nu zelfs een groeiend aantal mensen dat zich realiseert dan hackers vaak uitstekende vriend(in)en en echtgenote[n/s] zijn.

Als je je aangetrokken voelt tot hacken omdat je geen sociaal leven hebt, dan is dat ook goed - je zal tenminste geen problemen hebben om je te concentreren. Misschien zal je later wel een sociaal leven krijgen.


<img alt="Hacker Glider" src="/images/glider.png"  style="display: block;margin-left: auto; margin-right: auto;width: 20%;">

### Stijlpunten
Om een hacker te zijn, moet je de hacker denkwijze volgen. Er zijn een aantal dingen die je kan doen als je niet aan een computer zit die blijken te helpen. Dit zijn geen substituten voor hacken (Niets is) maar vele hackers doen deze dingen, en voelen dat deze dingen op een of andere manier in verbinding staan met het hacken.

Leer je eigen taal goed beheersen. Alhoewel het een algemeen stereotiepe is dat programmeurs niet kunnen schrijven, zijn een groot aantal hackers (inclusief de beste die ik ken) zeer taalvaardig en goede schrijvers.

- Lees sience-fiction. Ga naar een science-fiction conventie (Een goede manier om in contact te komen met andere hackers).
- Bestudeer Zen en/of beoefen een gevechtssport. (De mentale discipline lijkt hetzelfde op belangrijke manieren.)
- Ontwikkel een analytisch oor voor muziek. Leer verscheidene soorten muziek te appreciëren. Leer een instrument te bespelen, of te zingen.)
- Ontwikkel je waardering voor "puns" en woordspelingen.

Hoe meer dingen je hiervan reeds doet, hoe waarschijnlijker het is dat je van nature uit al een hacker bent. Waarom deze dingen belangrijk zijn is niet helemaal duidelijk, maar ze zijn verbonden met het gebruik van beide hersenhelften, iets dat belangrijk is. (Hackers moeten, en logisch kunnen redeneren, en direct daarna uit de ogenschijnlijke logica van een probleem kunnen stappen.)

Tenslotte, een aantal dingen om zeker niet te doen:

- Gebruik geen gekke, grootse gebruikers- of schermnamen
- Raak niet verzeild in "flame wars" op het Usenet (Of ergens anders).
- Noem jezelf geen "cyberpunk" en verspil je tijd ook niet met degenen die dit wel doen.
- Publiceer of email niet iets dat vol staat met spellingsfouten of slecht taalgebruik.
De enige reputatie die je met deze dingen krijgt, is die van een domkop. Hackers hebben olifantengeheugens: het kan jaren duren vooraleer je vroegere blunders vergeten zijn en je geaccepteerd wordt.

Het probleem van de schermnamen of schuilnamen vereist een verklaring. Je identiteit verbergen achter schuilnamen is een kinderachtige en gekke karaktertrek van crackers, Warez d00dz en andere lagere levensvormen. Hackers doen dit niet: Ze zijn trots op wat ze doen. Hetgeen ze doen willen ze dus geassocieerd zien met hun echte namen. Dus indien je een schermnaam hebt, laat die maar vallen. De hacker cultuur zal je zien als een "loser".


<img alt="Hacker Glider" src="/images/glider.png"  style="display: block;margin-left: auto; margin-right: auto;width: 20%;">

## Historische noot : Hacken, Open Source en Free Source
Toen ik oorspronkelijk deze FAQ schreef eind 1996, waren de omstandigheden heel anders dan vandaag de dag. Een paar opmerkingen over deze veranderingen kunnen zaken verhelderen voor de mensen die in de war zijn over de relatie van open source, free software, en Linux en de hacker community. Als je niet nieuwsgierig bent naar dit, kunt je direct doorgaan naar de FAQ en bibliografie.

De hacker ethiek en community zoals ik het hier heb beschreven dateren van lang voor de opkomst van Linux in 1990; ik werd voor het eerst betrokken rond 1976, en zijn wortels die direct zijn terug te voeren op de vroege jaren 1960. Maar voor Linux, werd het meest hacken gedaan op proprietary besturingssystemen of een handvol van de quasi-experimentele homegrown systemen zoals MIT's ITS die nooit buiten hun oorspronkelijke academische kringen werden ingezet. Hoewel er sprake was van enkele eerdere (pre-Linux) pogingen om deze situatie te veranderen, was hun invloed op zijn best zeer marginaal en beperkt tot de community's van toegewijde ware gelovigen die kleine minderheden binnen de hacker gemeenschap waren, laat staan ​​met betrekking tot de grotere wereld van de software in het algemeen.

Wat heet nu "open source" gaat terug tot de hacker community doet, maar tot 1985 was het een niet nader genoemde volks praktijk in plaats van een bewuste beweging met theorieën en manifesten die eraan verbonden zijn. Dit prehistorie eindigde toen, in 1985, elite-hacker Richard Stallman ( "RMS") geprobeerd om het een naam te geven aan - "free software". Maar zijn daad van naamgeving was ook een daad van claimen; hij verbonden ideologische bagage aan de "free software" label, die een groot deel van de bestaande hacker community nooit is geaccepteerd. Als gevolg hiervan werd de "free software" label breed verworpen door een substantiële minderheid van de hacker gemeenschap (vooral bij die in verband met BSD Unix), en gebruikt met ernstig, maar stille bezwaren van een meerderheid van de rest (waaronder ikzelf).

Ondanks deze reserveringen, houdt RMS's definitie van “free software” stand in de hacker community tot midden van de jaren 1990. Het werd pas serieus uitgedaagd door de opkomst van Linux. Linux geeft open source-ontwikkeling een natuurlijke plek. Vele projecten worden uitgegeven onder de voorwaarden die we nu open-source noemen zijn gemigreerd van proprietary Unixen naar Linux. De Linux community is explosief gegroeid, veel groter en meer heterogeen dan de pre-Linux hacker cultuur. RMS heeft geprobeerd om al deze activiteiten in zijn "vrije software" beweging te integreren, maar werd gedwarsboomd door zowel de enorme diversiteit van de Linux-gemeenschap en de publieke scepsis van zijn oprichter, Linus Torvalds. Torvalds bleef de term "free software" gebruiken bij gebrek aan een alternatief, maar publiekelijk afgewezen RMS ideologische bagage. Veel jongere hackers volgden.

In 1996, toen ik voor het eerst dit Hacker HOWTO publiceerde, was de hacker community snel aan het reorganiseren rond Linux en een handvol andere open-source besturingssystemen (met name die afstammen van BSD Unix). Gemeenschap herinnering aan het feit dat de meesten van ons tientallen jaren had doorgebracht met het ontwikkelen van closed-source software op closed-source besturingssystemen was nog niet begonnen te vervagen, maar dat feit werd al snel een ver verleden; hackers waren, in toenemende mate, zichzelf aan het definiëren door hun verbinding aan de open source projecten zoals Linux of Apache.

De term "open source", was echter nog bedacht; dit kwam pas in begin 1998. Wanneer dit gebeurde werd het door de meeste hackers in de community binnen de komende half jaar geadopteerd; de uitzondering was een minderheid die ideologisch verbintenis hadden met de term “free software”. Sinds 1998, en vooral na 2003, is de betekenis van 'hacking' met een 'open-source (en free software) ontwikkeling " bijna synoniem . Vandaag is er weinig zin in een poging om onderscheid te maken tussen deze categorieën, en het lijkt onwaarschijnlijk dat zal veranderen in de toekomst.

Het is goed te beseffen echter dat dit niet altijd zo was.

<img alt="Hacker Glider" src="/images/glider.png"  style="display: block;margin-left: auto; margin-right: auto;width: 20%;">

# Andere bronnen
Peter Seebach onderhoudt een uitstekende Hacker FAQ voor managers die niet weten hoe ze hackers moeten aanpakken.

Ik heb ook "A Brief History Of Hackerdom" geschreven.

Ik heb een tekst geschreven met als titel "The Cathedral and the Bazaar" , die verklaart hoe de Linux en de open-source cultuur in elkaar zit. Dit onderwerp heb ik zelfs nog rechtstreekster beschreven in het vervolg: Homesteading the Noosphere.

Rick Moen heeft een uitstekend artikel geschreven over hoe je een Linux gebruikersgroep opstart.

# Veel gestelde vragen / FAQ
##### Hoe weet ik ik of ik al een hacker ben?
Stel jezelf de volgende drie vragen:

- Spreek je code, vloeiend?
- Kun je identificeren met de doelen en waarden van de hacker community?
- Heeft een gevestigde lid van de hacker community je ooit een hacker genoemd?

Als u 'ja' kunt beantwoorden op alle drie vragen, bent je al een hacker. Geen twee zijn op zich voldoende.

De eerste test is over vaardigheden. U passeert het waarschijnlijk als je de minimale technische vaardigheden heeft die eerder zijn beschreven in dit document. Je vliegt er dwars doorheen als je een behoorlijke hoeveelheid van je code door een open-source ontwikkelingsproject geaccepteerd is.

De tweede test is over je houding. Als de vijf principes van de hacker mindset vanzelfsprekend voor je leek, meer als een beschrijving van de manier waarop je leeft dan als iets nieuws, dan ben je al halverwege. Dat is de innerlijke helft; de andere, uitwendige helft is de mate waarin je identificeren met de hacker community lange termijn projecten.

Hier is een onvolledige maar indicatieve lijst van enkele van deze projecten: Maakt het uit aan u dat Linux te verbeteren en te verspreiden? Ben je gepassioneerd over software vrijheid? Vijandig tegenover monopolies? Gedraag je in de overtuiging dat computers instrumenten van empowerment kunnen zijn om de wereld een rijker en menselijker plaats te maken?

Maar een kritische noot is hier op zijn plaats. De hacker gemeenschap heeft een aantal specifieke, vooral defensieve politieke belangen - twee van hen zijn het verdedigen van vrije meningsuiting rechten en het afweren van "intellectuele eigendom" die de macht grijpen, dat open source illegaal zou maken. Sommige van die projecten op lange termijn zijn de burgerlijke vrijheden-organisaties zoals de Electronic Frontier Foundation en in Nederland Bits of Freedom, en de uiterlijke houding omvat de juiste steun van hen. Maar buiten dat, de meeste hackers bekijken pogingen om de hacker houding in een expliciet politiek programma met achterdocht; we hebben op de harde manier geleerd dat deze pogingen verdeeldheid opleveren en afleidend zijn. Als iemand probeert u te werven om te marcheren op uw hoofdstad in de naam van de hacker houding, hebben ze het punt gemist. Het juiste antwoord is waarschijnlijk "Zwijg en laat ze de code zien."

De derde test heeft een lastige element van recursiviteit. Ik merkte in de paragraaf "Wat is een Hacker? ', dat een hacker is deels een kwestie van het behoren tot een bepaalde subcultuur of sociale netwerk met een gedeelde geschiedenis, een binnen en buiten. In het verre verleden waren hackers een veel minder samenhangend en zelfbewuste groep dan ze nu zijn. Maar het belang van de sociale netwerk is toegenomen in de afgelopen dertig jaar, dankzij het internet is het voor de kern van de hacker subcultuur zich makkelijker ontwikkelen en contacten te onderhouden. Een eenvoudige indicatie van deze verandering is we onze eigen T-shirts hebben.

Sociologen, die netwerken te bestuderen zoals die van de hacker cultuur onder de algemene noemer van "onzichtbare colleges", hebben opgemerkt dat één kenmerk van dergelijke netwerken is dat ze gatekeepers - kernleden met de sociale dienst om nieuwe leden te onderschrijven in het netwerk. Omdat de "onzichtbare college" hacker cultuur een losse en informele organisatie is, is de rol van poortwachter ook vrijblijvend. Maar een ding dat alle hackers in hun botten begrijpen dat niet elke hacker is een poortwachter. Poortwachters moeten een zekere mate van senioriteit en prestatie voordat ze de titel kan schenken. Hoeveel is moeilijk te kwantificeren, maar elke hacker weet dat wanneer ze het zien.

### Wil je me leren hoe ik moet hacken?
Sinds de publicatie van deze tekst heb ik meerdere emails per week (vaak meerdere keren per dag) gekregen van mensen met de vraag "Leer me alles over hacken". Spijtig genoeg heb ik niet de tijd of de energie om dit te doen. Mijn eigen hackprojecten en reizen als een open-source advocaat, nemen 110% van mijn tijd in beslag.

Zelfs al zou ik het doen, hacken is een houding en vaardigheid die je je praktisch zelf moet leren. Je zal ondervinden dan terwijl er echte hackers zijn die je willen helpen, je niet gerespecteerd gaat worden als je smeekt om alles voorgekauwd te krijgen.

Leer een paar dingen eerst. Laat zien dat je probeert, dat je in staat bent om op je eigen te leren. Neem dan contact op met hackers met specifieke vragen.

Als je een hacker emailt voor advies, zijn er twee dingen die je op voorhand moet weten. Ten eerste, uit ondervinding weten we dat mensen die te lui of te slordig zijn in hun schrijven, meestal ook te lui en te slordig zijn om een goede hacker te worden. Let dus op spellingsfouten, grammatica, en punctuatie, anders zal je waarschijnlijk genegeerd worden. Ten tweede, durf niet te vragen om op een ander email adres teruggemaild te worden dan hetgene waarvan je emailt. Deze mensen zijn uit ondervinding meestal dieven die gestolen accounts gebruiken en wij hebben geen interesse om boeven te belonen.

### Hoe kan ik dan beginnen?
De beste manier om te starten is waarschijnlijk om naar een LUG (Linux User Group) te gaan. Je kan zulke groepen vinden in de LDP General Linux Information Page Er is er mogelijk eentje in jouw buurt, waarschijnlijk geassocieerd met een universiteit of hoge school. LUG leden, zullen je meestal wel een versie van Linux geven als je het ze vraagt, en zullen je zeker helpen met het installeren en de eerste stappen.

Je volgende stap (en je eerste als je geen LUG kunt vinden) is om een open source project te vinden die je intereseert. Beging met het lezen van de source code en oplossen van bugs. Leer hoe je kun bijdragen en werk je in door aan je 'skills' te werken.

Een andere optie is om een hackerspace te bezoeken. Er komen steeds meer plekken waar hacker bij elkaar komen - makers clubs - waar je kunt 'chillen', samen te werken aan hard- en software projecten, alleen werken in een inspirerende omgeving. Hackerspaces hebben meestal gespecialiceerde gereedschap dat te duur is om zelf aan te schaffen. Hackerspaces zijn makkelijk te vinden op het internet, er kan er eentje bij jouw in de buurt zijn (check voor http://hackerspaces.nl Nederland] of internationaal)

### Wanneer moet ik starten? Is het te laat voor mij om te leren?
Elke leeftijd waarop je gemotiveerd bent is goed. De meesten worden geinteresseerd op een leeftijd tussen 15 en 20, maar ik ken uitzonderingen in beide richtingen.

### Hoe lang zal het duren om te leren hacken?
Dat hangt af van hoe getalenteerd je bent en hoe hard je werkt. De meeste mensen kunnen een respectabele vaardigheid ontwikkelen in achttien maanden tot twee jaar, als ze zich concentreren. Denk niet dat het daar eindigt. Als je een echte hacker bent, dan zul je de rest van je leven spenderen aan bijleren en het perfectioneren van je kunde.

### Zijn Visual Basic of Delphi goede talen om mee te starten?
Nee, omdat ze niet overdraagbaar zijn naar andere besturingssystemen. Er zijn geen open-source implementaties van deze talen, dus je zal geketend zijn aan de systemen waarvan de verkoper beslist om ze te ondersteunen. Dit monopolie accepteren, hoort niet bij de hacker.

Vooral Visual Basic is verschrikkelijk. Het feit dat het een eigen Microsoft taal is, is genoeg om het te disqualifiseren, en zoals andere Basic talen, is het een slecht ontworpen taal die je enkel slechte programmeergewoonten aanleert.

Een van die slechte gewoontes is om afhankelijk te worden van slechts een enkele verkoper voor libraries, widgets en ontwikkelingstools. In het algemeen, iedere taal die niet ondersteund wordt door tenminste Linux of een van de DSD's en/of onder tenminste drie verschillende besturingssystemen is een slechte taal om in te leren hacken.

### Wil je met helpen met het cracken van een systeem, of wil je me leren om te cracken?
Nee. Iedereen die nog steeds zo'n vraag kan stellen na het lezen van deze FAQ is te stom om bij te leren zelfs al had ik de tijd om te leren. Alle geëmailde aanvragen van deze soort zullen genegeerd worden of beantwoord met extreme grofheid.

### Hoe kan ik een wachtwoord bekomen van iemand anders account?
Dit is cracking. Ga weg, idioot.

### Hoe kan ik iemands mail lezen/monitoren?
Dit is cracking. Hoor je niet goed? Weg, weg, weg, onnozelaar.

### Hoe kan ik channel op priveleges krijgen op IRC?
Dit is cracking. Scheer je weg, debiel.

### Ik werd gecracked. Kun je me helpen verdere aanvallen te weren?
Nee. Iedere keer tot nu toe, dat mij deze vraag gesteld werd, bleek het van een arme ziel te zijn die Microsoft Windows gebruikte. Het is niet mogelijk om Windows systemen effectief te beveiligen: de code en de architectuur hebben gewoonweg te veel fouten, hetgeen het beveiligen van Windows maakt zoals water wegscheppen met een zeef. De enige betrouwbare oplossing begint met het overschakelen naar Linux of een ander besturingssysteem dat tenminste ontworpen is om beveiliging te ondersteunen.

### Ik heb problemen met mijn Windows software. Kun je me helpen?
Ja. Ga naar je DOS prompt en tik: "format c:". Al de problemen die je had zullen binnen enkele minuten verdwijnen.

### Waar kan ik andere echte hackers vinden om mee te praten?
De beste manier om dit te doen is naar een Unix of Linux gebruikersgroep gaan. (Je kan links vinden naar verschillende groepen op de LDP site bij Metalab).

Vroeger zei ik dat je geen echte hackers zou vinden op IRC, maar dit lijkt te veranderen. Blijkbaar zijn er enkele echte hackergemeenschappen, verbonden aan dingen zoals GIMP en Perl.)

### Kun je me enkele nuttige boeken aanraden die te maken hebben met hacking gerelateerde onderwerpen?
Ik onderhoud een Linux Reading List HOWTO die je misschien wel nuttig zal vinden. Loginataka kan misschien ook interessant zijn.

### Moet ik goed zijn in wiskunde om een hacker te worden?
Nee. Terwijl je wel goed moet zijn in logisch nadenken en goed moet kunnen redeneren heeft hacken eigenlijk niets te maken met wiskunde en rekenkunde. In het bijzonder heb je geen analyse nodig. (Dit laten we over aan de elektrische ingenieurs :-) ) Een basis in de eindige rekenkunde (zoals Boole algebra, eindige rekenkunde, combinatieleer en grafieken) kan handig zijn.

### Welke taal moet is het eerst leren?
HTML, als je het nog niet kent. Er zijn een hele hoop van schitterende, mooie, door hype gedreven slechte boeken te vinden, en een stresserend klein aantal goede. Degene die ik als het beste ervaar is HTML: The Definitive Guide.

Maar HTML is niet een volledige programmeertaal. Als je klaar bent om te leren programmeren, raad ik je aan om te starten met Python. Je zal een hoop mensen Perl horen aanbevelen en Perl is nog steeds populairder dan Python, maar het is moeilijker te leren (in mijn opinie) en minder goed ontworpen.

C is echt belangrijk, maar is ook veel moeilijker dan Python of Perl. Probeer niet om deze taal het eerst te leren.

Windows gebruikers: ga niet voor Visual Basic. Het zal je slechte programmeergewoonten aanleren en het is niet overdraagbaar naar niet Windows systemen. Vermijd deze programmeertaal!

### Welke hardware heb ik nodig?
Vroeger waren de PC's niet krachtig genoeg en geheugen arm, genoeg om artificiele limieten op te leggen aan hackers in hun leerproces. Dit is niet meer waar en een machine vanaf een Intel 486DX50 is meer dan krachtig genoeg voor ontwikkelingswerk, X en internet communicatie. De kleinste harde schijven die je vandaag de dag kan kopen, zijn groot genoeg.

Het belangrijkste in het kiezen van hardware is om te leren of deze hardware Linux-compatibele (Of BSD-compatibele) is. Dit is waar voor de meeste moderne machines, de enige moeilijkheden die je kan ondervinden zich bij printers. Sommige machines hebben specifieke Windows hardware en zullen niet werken met Linux.

Er is een FAQ over hardware compatibiliteit. De laatste versie staat hier.

### Moet Ik Windows haten en op afstand houden?
Nee, dat hoeft niet. Niet dat Microsoft niet walgelijk is, maar er waren hackers lang, lang voor Microsoft bestond en er zullen nog steeds hackers zijn als Microsoft al lang vergeten is. Alle energie die je spendeert aan het haten van Microsoft kun je beter gebruiken om van je vakkundigheid te houden. Schrijf goede code - dit houdt Windows op voldoende afstand zonder dat je karma vervuild wordt.

### Maar zorgt open-source software er niet voor dat programmeurs geen geld meer verdienen?
Dit is onwaarschijnlijk - tot nu toe blijkt de open-source gemeenschap jobs te creeren in plaats van af te pakken. Als het schrijven van een programma economisch meer verantwoord is dan het niet te schrijven, dan zal de programmeur betaald worden, of het programma nu open-source gaat zijn of niet. En hoeveel software er ook "free" gaat zijn, er is nog altijd veel vraag naar op maat gesneden programma's. Ik heb hierover meer geschreven op de Open Source pagina's.

### Hoe start ik? Waar kan ik een gratis Unix krijgen?
Op andere plaatsen in dit document vind je links naar de meest gebruikte gratis Unixes. Om een hacker te zijn, heb je motivatie en initiatief nodig en de mogelijkheid om op je eentje te leren.

# Begin NU!