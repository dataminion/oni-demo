//some basic variables to help with js
//jupyter server
var jupyterIP = "0.0.0.0";
var jupyterPort = "8889";
var notebookPath = "python/notebooks/";

// "other/bars.html" 71
var otherBars = '../data/json/stats.json';

// "other/dendro.html" 77
var otherDendro = '../data/json/threat-10_9_81_5.json';

// "other/details.html" 35
var csvpath = "../data/user/vast/";

// "other/globe.html" 102
var placesAtack = "../data/json/places_attack.json";

// "other/globe.html" 102
var placesGlobe = "../data/json/world-110m.json";

var ldaScores = "../data/user/vast/lda_scores.csv";
var baseldaScores = "/lda_scores.csv"

// "other/timeline.html" 43
var timeLine = "../data/user/vast/sbdet-10_9_81_5.tsv";
var timeLineTsv= 'sbdet-10_9_81_5.tsv';

// "sconnects/sconnect_details.html" 80,83
var basecsvpath = "../data/user/";
var basePath = "vast";

var flowFile = "/flow_scores.csv";

// "sconnects/sconnect_iflow.html" 199,207
var minSconnects = 0;
var maxSconnects = 3000;
var coff = maxSconnects - minSconnects;
var ldaScoresData = [];
var fport = 47999;

// "sconnects/sconnect_chord.html" 32
var chordPortFile = "port123.csv";