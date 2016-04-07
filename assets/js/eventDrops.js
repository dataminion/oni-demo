(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";var configurable=require("./util/configurable"),defaultConfig={xScale:null,dateFormat:null};module.exports=function(t){function e(e){e.each(function(){d3.select(this).selectAll("text").remove();var e=t.xScale.domain();d3.select(this).append("text").text(function(){return t.dateFormat(e[0])}).classed("start",!0),d3.select(this).append("text").text(function(){return t.dateFormat(e[1])}).attr("text-anchor","end").attr("transform","translate("+t.xScale.range()[1]+")").classed("end",!0)})}t=t||{};for(var a in defaultConfig)t[a]=t[a]||defaultConfig[a];return configurable(e,t),e};
},{"./util/configurable":6}],2:[function(require,module,exports){
"use strict";var configurable=require("./util/configurable"),eventLine=require("./eventLine"),delimiter=require("./delimiter");module.exports=function(t){var e={start:new Date(0),end:new Date,width:1e3,margin:{top:60,left:200,bottom:40,right:50},locale:null,axisFormat:null,tickFormat:[[".%L",function(t){return t.getMilliseconds()}],[":%S",function(t){return t.getSeconds()}],["%I:%M",function(t){return t.getMinutes()}],["%I %p",function(t){return t.getHours()}],["%a %d",function(t){return t.getDay()&&1!=t.getDate()}],["%b %d",function(t){return 1!=t.getDate()}],["%B",function(t){return t.getMonth()}],["%Y",function(){return!0}]],eventHover:null,hasDelimiter:!0,hasTopAxis:!0,hasBottomAxis:function(t){return t.length>=10},eventColor:"black"};return function(n){function a(e){e.each(function(e){function a(){"[object MouseEvent]"===t.event.sourceEvent.toString()&&c.translate([t.event.translate[0],0]),"[object WheelEvent]"===t.event.sourceEvent.toString()&&c.scale(t.event.scale),s()}function i(){d.select(".delimiter").remove();d.append("g").classed("delimiter",!0).attr("width",m).attr("height",10).attr("transform","translate("+n.margin.left+", "+(n.margin.top-45)+")").call(delimiter({xScale:r,dateFormat:n.locale?n.locale.timeFormat("%d %B %Y"):t.time.format("%d %B %Y")}))}function l(e){var a=[];n.tickFormat.forEach(function(t){var e=t.slice(0);a.push(e)});var o=n.locale?n.locale.timeFormat.multi(a):t.time.format.multi(a),i=t.svg.axis().scale(r).orient(e).tickFormat(o);"function"==typeof n.axisFormat&&n.axisFormat(i);var l=("bottom"==e?parseInt(u):0)+n.margin.top-40;g.select(".x-axis."+e).remove();g.append("g").classed("x-axis",!0).classed(e,!0).attr("transform","translate("+n.margin.left+", "+l+")").call(i)}function s(){var t="function"==typeof n.hasTopAxis?n.hasTopAxis(e):n.hasTopAxis;t&&l("top");var a="function"==typeof n.hasBottomAxis?n.hasBottomAxis(e):n.hasBottomAxis;a&&l("bottom"),c.size([n.width,f]),g.select(".graph-body").remove();var i=g.append("g").classed("graph-body",!0).attr("transform","translate("+n.margin.left+", "+(n.margin.top-15)+")"),s=i.selectAll("g").data(e);s.enter().append("g").classed("line",!0).attr("transform",function(t){return"translate(0,"+o(t.name)+")"}).style("fill",n.eventColor).call(eventLine({xScale:r})),s.exit().remove()}var c=t.behavior.zoom().center(null).on("zoom",a);n.hasDelimiter&&c.on("zoomend",i);var m=n.width-n.margin.right-n.margin.left,u=40*e.length,f=u+n.margin.top+n.margin.bottom;t.select(this).select("svg").remove();var d=t.select(this).append("svg").attr("width",n.width).attr("height",f),g=d.append("g").attr("transform","translate(0, 25)"),v=[],p=[];e.forEach(function(t,e){v.push(t.name),p.push(40*e)}),o.domain(v).range(p);var h=g.append("g").classed("y-axis",!0).attr("transform","translate(0, 60)"),x=h.append("g").selectAll("g").data(v);x.enter().append("g").attr("transform",function(t){return"translate(0, "+o(t)+")"}).append("line").classed("y-tick",!0).attr("x1",n.margin.left).attr("x2",n.margin.left+m),x.exit().remove();var b,y,A=d.append("rect").call(c).classed("zoom",!0).attr("width",m).attr("height",f).attr("transform","translate("+n.margin.left+", 35)");"function"==typeof n.eventHover&&A.on("mousemove",function(){var e=t.event;if(b!=e.clientX||y!=e.clientY){b=e.clientX,y=e.clientY,A.attr("display","none");var a=document.elementFromPoint(t.event.clientX,t.event.clientY);A.attr("display","block"),"circle"===a.tagName&&n.eventHover(a)}}),r.range([0,m]).domain([n.start,n.end]),c.x(r),s(),n.hasDelimiter&&i()})}var r=t.time.scale(),o=t.scale.ordinal();n=n||{};for(var i in e)n[i]=n[i]||e[i];return configurable(a,n),a}};
},{"./delimiter":1,"./eventLine":3,"./util/configurable":6}],3:[function(require,module,exports){
"use strict";var configurable=require("./util/configurable"),filterData=require("./filterData"),defaultConfig={xScale:null};module.exports=function(e){e=e||{};for(var t in defaultConfig)e[t]=e[t]||defaultConfig[t];var r=function(t){t.each(function(){d3.select(this).selectAll("text").remove(),d3.select(this).append("text").text(function(t){var r=filterData(t.dates,e.xScale).length;return t.name+(r>0?" ("+r+")":"")}).attr("text-anchor","end").attr("transform","translate(-20)").style("fill","black"),d3.select(this).selectAll("circle").remove();var t=d3.select(this).selectAll("circle").data(function(t){return filterData(t.dates,e.xScale)});t.enter().append("circle").attr("cx",function(t){return e.xScale(t)}).attr("cy",-5).attr("r",10),t.exit().remove()})};return configurable(r,e),r};
},{"./filterData":4,"./util/configurable":6}],4:[function(require,module,exports){
"use strict";module.exports=function(r,n){r=r||[];var t=[],u=n.range(),e=u[0],o=u[1];return r.forEach(function(r){var u=n(r);e>u||u>o||t.push(r)}),t};
},{}],5:[function(require,module,exports){
"use strict";var eventDrops=require("./eventDrops");"function"==typeof define&&define.amd?define("d3.chart.eventDrops",["d3"],function(e){e.chart=e.chart||{},e.chart.eventDrops=eventDrops(e)}):window?(window.d3.chart=window.d3.chart||{},window.d3.chart.eventDrops=eventDrops(window.d3)):module.exports=eventDrops;
},{"./eventDrops":2}],6:[function(require,module,exports){
module.exports=function(n,r,t){t=t||{};for(var o in r)!function(o){n[o]=function(e){return arguments.length?(r[o]=e,t.hasOwnProperty(o)&&t[o](e),n):r[o]}}(o)};
},{}]},{},[5]);


//# sourceMappingURL=bundle.map.json