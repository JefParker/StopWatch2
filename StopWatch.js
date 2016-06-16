// JavaScript Document

function OnLoadWebsite() {
  var sHeader = "";
  sHeader += "<div class='Title' id='Title'>"+MakeLogo("Stop", "Watch", false, false, true)+"</div>";
  sHeader += "<div class='MenuButton' id='MenuButton'><a href='javascript:ShowMenuPanel()' title='Menu'>-<br>-<br>-</a></div>";
  sHeader += "<div class='MenuPanel' id='MenuPanel'>" + MakeMenuPanel('Home') + "</div>";
	document.getElementById("Header").innerHTML = sHeader;
	document.getElementById("Main").innerHTML = "<div class='RoundedBox'><br>" + MakeLogo("Stop", "Watch", true, true, false) + "<br></div>";
	document.getElementById("Title").addEventListener("click", MakeAboutUsPage);
	document.getElementById("Main").addEventListener("click", CloseMenu);
	ShowMenuPanel();
}

function MakeAboutUsPage() {
  document.getElementById("Title").innerHTML = "<div class='TitleAni'>" + MakeLogo("About", "SW", false, false, true) + "</div>";
  CloseMenu();
  var sPage = "<div class='RoundedBox'>";
	sPage += "<p class='CopyCentered'><a href='https://chrome.google.com/webstore/detail/stopwatch/lifnoadagfppcljadelgkjddidcnjbcc' target='_blank'>StopWatch</a>, Version 0.0.1.1</p>";
	sPage += "<div id='HomeLogo' class='Copy' style='font-size: 75%; text-align: center;'>"+MakeLogo("Stop", "Watch", true, true, false)+"</div>";
  sPage += "<div id='Copyright' class='Copy' style='font-size: 75%; text-align: center;'>&copy; " + YearInRomanNumerals() + " The Inchoate Company</div>";
	sPage += "<br></div>";
  document.getElementById("Main").innerHTML = sPage;
  document.getElementById("HomeLogo").addEventListener("click", MakeStopWatchPage);
  document.getElementById("MenuPanel").innerHTML = MakeMenuPanel('About');
}

function MakeStopWatchPage() {
  document.getElementById("Title").innerHTML = "<div class='TitleAni'>" + MakeLogo("Stop", "Watch", false, false, true) + "</div>";
  CloseMenu();
  var sPage = "<div class='RoundedBox'>";
  sPage += "<div id='SWReadout' class='Readout'>";
  sPage += "00:00:00.0";
  sPage += "</div>"; // SWReadout
  sPage += "<p style='font-size: 3px;'>&nbsp;</p>";
  sPage += "<div style='margin-right: auto; margin-left: auto; text-align: center;'>";
  sPage += "<button id='SWReset' value='Reset' class='Controls' style='disabled: true;'>Lap</button>";
  sPage += "<button id='SWStart' value='Start' class='Controls'>Start</button>";
  sPage += "<textarea id='LapList' class='Controls' style='border: 0; width: 96%; height: 150px; font-size: 100%; color: #555555; background-color: #f1f1f1;' readonly></textarea>";
  sPage += "</div>";
  sPage += "</div>";
  document.getElementById("Main").innerHTML = sPage;
	document.getElementById("SWReset").addEventListener("click", ResetClicked);
	document.getElementById("SWStart").addEventListener("click", StartClicked);
	document.getElementById('SWReset').disabled = true;
  StartClicked.Start = false;
  ResetClicked.Reset = "Lap";
  ResetClicked.LapList = '';
  StartClicked.ElapsedTime = 0;
  if (StartClicked.DisplayTimer)
    window.clearInterval(StartClicked.DisplayTimer);
  document.getElementById("MenuPanel").innerHTML = MakeMenuPanel('StopWatch');
}

function MakeTipCalcPage() {
  document.getElementById("Title").innerHTML = "<div class='TitleAni'>" + MakeLogo("Tip", "Calc", false, false, true) + "</div>";
  CloseMenu();
  var sPage = "<div class='RoundedBox'>";
  sPage += "<br><div class='ControlsCentered'><span class='Copy'>$ <span><input type='text' id='TipBill' class='Controls' style='width: 80%' placeholder='Bill' OnBlur='UpdateTip()' OnChange='UpdateTip()' OnInput='UpdateTip()' OnKeyUp='UpdateTip()' OnPaste='UpdateTip()'></div>";
  sPage += "<p id='TipPercentageLable' class='CopyCentered'>20%</p>";
  sPage += "<div class='ControlsCentered'><input type='range' id='TipPercentage' class='Controls' title='Percentage' value='20' min='0' max='100' list='TipPercentageNum' OnChange='UpdateTip()'></div>";
  sPage += "<datalist id='TipPercentageNum'>";
  sPage += "<option>0</option>";
  sPage += "<option>5</option>";
  sPage += "<option>10</option>";
  sPage += "<option>15</option>";
  sPage += "<option>20</option>";
  sPage += "<option>25</option>";
  sPage += "<option>30</option>";
  sPage += "<option>35</option>";
  sPage += "<option>40</option>";
  sPage += "<option>45</option>";
  sPage += "<option>50</option>";
  sPage += "<option>55</option>";
  sPage += "<option>60</option>";
  sPage += "<option>65</option>";
  sPage += "<option>70</option>";
  sPage += "<option>75</option>";
  sPage += "<option>80</option>";
  sPage += "<option>85</option>";
  sPage += "<option>90</option>";
  sPage += "<option>95</option>";
  sPage += "<option>100</option>";
  sPage += "</datalist>";
  sPage += "<br><div class='ControlsCentered'><label class='Controls' style='color: #555555;'>";
  sPage += "<input type='checkbox' class='Controls' name='TipRound' id='TipRound'>Round Up";
  sPage += "</label></div>";
  sPage += "<p id='TipTip' class='Controls' style='text-align: center; color: red;'>Tip</p>";
  sPage += "<p id='TipTotal' class='Controls' style='text-align: center; color: red;'>Total</p>";
  sPage += "</div>";
  document.getElementById("Main").innerHTML = sPage;
	document.getElementById('TipRound').checked = true;
	document.getElementById("TipRound").addEventListener("change", UpdateTip);
	document.getElementById("MenuPanel").innerHTML = MakeMenuPanel('Tip');
}

function MakeFVCalcPage() {
  document.getElementById("Title").innerHTML = "<div class='TitleAni'>" + MakeLogo("Future", "Value", false, false, true) + "</div>";
  CloseMenu();
  var sPage = "<div class='RoundedBox'>";
  sPage += "<br><div class='ControlsCentered'><select id='FVCalcType' class='Controls' style='width: 90%; text-align: center;' OnChange='ChangeFVCalc()'>";
  sPage += "<option value='Find Present Value'>Find Present Value</option>";
  sPage += "<option value='Find Number of Periods'>Find Number of Periods</option>";
  sPage += "<option value='Find Rate'>Find Rate</option>";
  sPage += "<option selected='selected' value='Find Future Value'>Find Future Value</option>";
  sPage += "</select></div><br>";
  sPage += "<div class='ControlsCentered'><input type='text' id='FVPresentValue' class='Controls' value='100' style='text-align: center; width: 90%' placeholder='Present Value' OnBlur='UpdateFV()' OnChange='UpdateFV()' OnInput='UpdateFV()' OnKeyUp='UpdateFV()' OnPaste='UpdateFV()'></div>";
  sPage += "<div class='ControlsCentered'><input type='text' id='FVNumOfPeriods' class='Controls' value='1' style='text-align: center; width: 90%;' placeholder='# of Periods' OnBlur='UpdateFV()' OnChange='UpdateFV()' OnInput='UpdateFV()' OnKeyUp='UpdateFV()' OnPaste='UpdateFV()'></div>";
  sPage += "<div class='ControlsCentered'><input type='range' id='FVRate' class='Controls' value='15' min='0.00' max='100.00' OnChange='UpdateFV()'><p id='FVRateLable' for='FVRate'>15%</p></div>";
  sPage += "<div class='ControlsCentered'><input type='text' id='FVFutureValue' class='Controls' readonly value='Future Value is 115.00' style='text-align: center; width: 90%; background-color: #f1f1f1;' placeholder='# of Periods' OnBlur='UpdateFV()' OnChange='UpdateFV()' OnInput='UpdateFV()' OnKeyUp='UpdateFV()' OnPaste='UpdateFV()'></div>";
  sPage += "<br></div>";
  document.getElementById("Main").innerHTML = sPage;
  UpdateFV();
  document.getElementById("MenuPanel").innerHTML = MakeMenuPanel('Future');
}

function MakeCPICalcPage() {
  document.getElementById("Title").innerHTML = "<div class='TitleAni'>" + MakeLogo("CPI", "Calc", false, false, true) + "</div>";
  CloseMenu();
  var sPage = "<div class='RoundedBox'>";
  sPage += "<p align='center'><input type='text' class='Controls' id='CPIStartingAmount' value='$100.00' maxlength='14' style='text-align: center; width: 80%;' data-inline='true' placeholder='Starting Amount' OnBlur='UpdateBP()' OnChange='UpdateBP()' OnInput='UpdateBP()' OnKeyUp='UpdateBP()' OnPaste='UpdateBP()'></p>";
  sPage += "<p class='Controls' style='text-align: center; margin-top: 0; font-size: 90%;'>in</p>";
  sPage += "<div class='ControlsCentered'><select id='CPIStartYear' class='Controls' OnChange='UpdateBP()'>";
  for (var i=1913; i<2017; i++) {
    sPage += "<option value='"+i+"'>"+i+"</option>";
  }
  sPage += "</select></div>";
  sPage += "<p class='Controls' style='text-align: center; font-size: 90%;' id='CPITransLine'>has the same buying power in</p>";
  sPage += "<div class='ControlsCentered'><select id='CPIEndYear' class='Controls' OnChange='UpdateBP()'>";
  for (i=1913; i<2017; i++) {
    sPage += "<option value='"+i+"'>"+i+"</option>";
  }
  sPage += "</select></div>";
  sPage += "<p class='Controls' style='text-align: center; font-size: 90%;'>as</p>";
  sPage += "<p id='CPIResultAmount' class='Controls' style='text-align: center; margin-top: 0;'><b>$100.00</b></p>";
  sPage += "</div>";
  document.getElementById("Main").innerHTML = sPage;
  document.getElementById("CPIStartYear").value='2016';
  document.getElementById("CPIEndYear").value='2016';
  document.getElementById("MenuPanel").innerHTML = MakeMenuPanel('CPI');
}

function MakeMagicNumberPage() {
  document.getElementById("Title").innerHTML = "<div class='TitleAni'>" + MakeLogo("Magic", "#", false, false, true) + "</div>";
  CloseMenu();
  var sPage = "<div class='RoundedBox'>";
  sPage += "<br><div class='ControlsCentered'><select id='MNSport' class='Controls' OnChange='CalculateMagicNumber()'>";
  sPage += "<option value='162'>MLB (regular)</option>";
  sPage += "<option value='82'>NBA (regular)</option>";
  sPage += "<option value='16'>NFL (regular)</option>";
  sPage += "<option value='82'>NHL (regular)</option>";
  sPage += "</select></div>";
  sPage += "<div class='ControlsCentered'><p class='Copy'>2nd place team's losses:  <input type='num' id='LostNum' class='Controls' placeholder='0' style='width: 25px; text-align: center;' OnBlur='CalculateMagicNumber()' OnChange='CalculateMagicNumber()' OnInput='CalculateMagicNumber()' OnKeyUp='CalculateMagicNumber()' OnPaste='CalculateMagicNumber()' /></p></div>";
  sPage += "<div class='ControlsCentered'><p class='Copy'>1st place team's wins: <input type='num' id='DivWinNum' class='Controls' placeholder='0' style='width: 25px; text-align: center;' OnBlur='CalculateMagicNumber()' OnChange='CalculateMagicNumber()' OnInput='CalculateMagicNumber()' OnKeyUp='CalculateMagicNumber()' OnPaste='CalculateMagicNumber()' /></p></div>";
  sPage += "<p class='Copy'>The elimination number (tragic number) for the 2nd place team is the <a href='http://www.wikiwand.com/en/Magic_number_(sports)' target='_blank'>magic number</a> for the 1st place team.  That number is...</p>";
  sPage += "<div id='MagicNum' class='MagicNumber'>?</div>";
  sPage += "</div>";
  document.getElementById("Main").innerHTML = sPage;
  document.getElementById("LostNum").addEventListener('change', CalculateMagicNumber, false);
  document.getElementById("DivWinNum").addEventListener('change', CalculateMagicNumber, false);
  document.getElementById("MenuPanel").innerHTML = MakeMenuPanel('Magic');
}

function MakeBMIPage() {
  document.getElementById("Title").innerHTML = "<div class='TitleAni' title='Body Mass Index'>" + MakeLogo("BM", "Index", false, false, true) + "</div>";
  CloseMenu();
  var sPage = "<div class='RoundedBox'><div class='ControlsCentered'>";
  sPage += "<span class='Copy'><a href='https://en.wikipedia.org/wiki/Body_mass_index' target='_blank' title='Wikipedia Body Mass Index Page'>Body mass index</a> is a rough attempt to quantify a person as underweight, normal weight, overweight or obese.</span>";
  sPage += "<br>";
  sPage += "<p class='Copy'>Height (feet & inches):</p>";
  sPage += "<select id='HeightFeet' class='Controls' OnChange='UpdateBMI()'>";
  for (var i=2; i<8; i++) {
    sPage += "<option value="+i+">"+i+"</option>";
  }
  sPage += "</select>";
  sPage += "<select id='HeightInches' class='Controls' OnChange='UpdateBMI()'>";
  for (var k=0; k<12; k++) {
    sPage += "<option value="+k+">"+k+"</option>";
  }
  sPage += "</select>";
  sPage += "<div class='ControlsCentered'><p class='Copy'>Weight:  <input type='num' id='Weight' value='175' class='Controls' placeholder='175' style='width: 35px; text-align: center;' OnBlur='UpdateBMI()' OnChange='UpdateBMI()' OnInput='UpdateBMI()' OnKeyUp='UpdateBMI()' OnPaste='UpdateBMI()' /></p></div>";

  sPage += "<div id='BMIResult'>?</div><br>";
  sPage += "</div>"; // Close the rounded box div
  document.getElementById("Main").innerHTML = sPage;
  document.getElementById("HeightFeet").addEventListener('change', UpdateBMI, false);
  document.getElementById("HeightInches").addEventListener('change', UpdateBMI, false);
  document.getElementById("Weight").addEventListener('change', UpdateBMI, false);
  document.getElementById("MenuPanel").innerHTML = MakeMenuPanel('BMI');
  document.getElementById("HeightFeet").value = 5;
  document.getElementById("HeightInches").value = 11;
  UpdateBMI();
}

function MakeMenuPanel(sPage) {
  var sMenu = '';
  sMenu += ('StopWatch' === sPage) ? "<a href='javascript:CloseMenu()' title='StopWatch'>StopWatch</a><br>" : "<a href='javascript:MakeStopWatchPage()' title='StopWatch'>StopWatch</a><br>";
  sMenu += ('Future' === sPage) ? "<a href='javascript:CloseMenu()' title='Rate or Future Value'>Future</a><br>" : "<a href='javascript:MakeFVCalcPage()' title='Rate or Future Value'>Future</a><br>";
  sMenu += ('CPI' === sPage) ? "<a href='javascript:CloseMenu()' title='CPI Calculator'>CPI</a><br>" : "<a href='javascript:MakeCPICalcPage()' title='CPI Calculator'>CPI</a><br>";
  sMenu += ('Tip' === sPage) ? "<a href='javascript:CloseMenu()' title='Tip Calculator'>Tip</a><br>" : "<a href='javascript:MakeTipCalcPage()' title='Tip Calculator'>Tip</a><br>";
  sMenu += ('Magic' === sPage) ? "<a href='javascript:CloseMenu()' title='Magic Number'>Magic #</a><br>" : "<a href='javascript:MakeMagicNumberPage()' title='Magic Number'>Magic #</a><br>";
  sMenu += ('BMI' === sPage) ? "<a href='javascript:CloseMenu()' title='BMI'>BMI</a><br>" : "<a href='javascript:MakeBMIPage()' title='Body Mass Index'>BMI</a><br>";
  sMenu += ('About' === sPage) ? "<a href='javascript:CloseMenu()' title='About StopWatch'>About</a>" : "<a href='javascript:MakeAboutUsPage()' title='About StopWatch'>About</a>";
  return sMenu;
}

function ShowMenuPanel() {
	if ('none' === document.getElementById('MenuPanel').style.display)
		document.getElementById('MenuPanel').style.display = 'block';
	else
		document.getElementById('MenuPanel').style.display = 'none';
}

function CloseMenu() {
  if ('block' === document.getElementById('MenuPanel').style.display)
	document.getElementById('MenuPanel').style.display = 'none';
}


// General Functions

function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function YearInRomanNumerals() {
  var Today = new Date();
  var YearNumber = Today.getYear();
  YearNumber = (YearNumber < 1000) ? YearNumber + 1900 : YearNumber;
  var sRomanNumeralYears = new Array("MMXIV", "MMXV", "MMXVI", "MMXVII", "MMXVIII", "MMXIX", "MMXX", "MMXXI", "MMXXII", "MMXXIII");
  return sRomanNumeralYears[YearNumber-2014];
}

function MakeLogo(sFirst, sLast, bCentered, bImage, bLit) {
  var aColors = [];
  if (bLit)
    aColors = ["#00a0ff", "#ffba00", "#FFA319", "#00CC00", "#66A86D", "#D991D6", "#ff1a08", "#00FFFF"];
  else
    aColors = ["#00a0ff", "#2715aa", "#ffba00", "#d1664d", "#689360", "#25822f", "#c047ba", "#763575", "#91160d", "#ff1a08"];
  var nColor = getRandomInt (0, aColors.length-1);
  var sLogo = "";
  var sFirstTypeColor = bLit ? "WhiteSmoke" : "gray";
  if (bImage)
    sLogo += "<p align='center'><img src='assets/StopWatch128.png'></p>";
  if (bCentered)
    sLogo += "<div class='CopyHeadline' style='color: "+sFirstTypeColor+"; line-height: 100%;";
  else
    sLogo += "<span class='CopyHeadline' style='color: "+sFirstTypeColor+"; line-height: 100%;";
  if (!bCentered)
    sLogo += "text-align: left;";
  sLogo += "'><span class='CopyHeadline300' style='color: "+sFirstTypeColor+";'>"+sFirst+"</span><span class='CopyHeadline900' style='color: " + aColors[nColor] + ";'>"+sLast+"</span>";
  if (bCentered)
    sLogo += "</div>";
  else
    sLogo += "</span>";
  return sLogo;
}

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roundNumber(rnum, rlength) {   // Arguments: number to round, number of decimal places
   var newnumber = Math.round(rnum*Math.pow(10,rlength))/Math.pow(10,rlength);
   return parseFloat(newnumber);
}
// End of General Functions

// Start of StopWatch Functions
function StartClicked() {
 if (StartClicked.Start) {  // Stop clicked
  StartClicked.EndTime = new Date().valueOf();
  StartClicked.ElapsedTime = StartClicked.EndTime - StartClicked.StartTime;
  window.clearInterval(StartClicked.DisplayTimer);
  StartClicked.Start = false;
  document.getElementById("SWStart").innerHTML = "Start";
  document.getElementById("SWReset").innerHTML = "Reset";
  ResetClicked.Reset = 'Reset';
  UpdateReadout(false);
 }
 else { // Start clicked
  StartClicked.StartTime = new Date().valueOf() - StartClicked.ElapsedTime;
  StartClicked.DisplayTimer = setInterval(function(){UpdateReadout(true);},50);
  StartClicked.Start = true;
  document.getElementById("SWStart").innerHTML = "Stop";
  document.getElementById("SWReset").disabled = false;
  document.getElementById("SWReset").innerHTML = "Lap";
  ResetClicked.Reset = 'Lap';
 }
}

function ResetClicked() {
  if ('Lap' === ResetClicked.Reset) { // Lap clicked
   window.clearInterval(StartClicked.DisplayTimer);
   var nElapsed = new Date().valueOf() - StartClicked.StartTime;
   ResetClicked.LapList = ResetClicked.LapList ? "Lap marked at " + MS2HMST(nElapsed) + "\n" + ResetClicked.LapList : "Lap marked at " + MS2HMST(nElapsed);
   document.getElementById("LapList").innerHTML = ResetClicked.LapList;
   document.getElementById("SWReadout").innerHTML = MS2HMST(nElapsed);
   document.getElementById("SWReset").innerHTML = "Lap off";
   ResetClicked.Reset = 'Off';
  }
  else if ('Off' === ResetClicked.Reset) { // Lap off clicked
   StartClicked.DisplayTimer = setInterval(function(){UpdateReadout(true);},50);
   document.getElementById("SWReset").innerHTML = "Lap";
   ResetClicked.Reset = 'Lap';
  }
  else if ('Reset' === ResetClicked.Reset) { // Reset clicked
   StartClicked.ElapsedTime = 0;
   ResetClicked.LapList = '';
   document.getElementById("LapList").innerHTML = '';
   document.getElementById("SWReadout").innerHTML = "00:00:00.0";
   document.getElementById("SWReset").disabled = true;
   ResetClicked.Reset = 'Lap';
  }
}

function UpdateReadout(bRunning) {
 var nElapsed = 0;
 if (bRunning) {
  nElapsed = new Date().valueOf() - StartClicked.StartTime;
  document.getElementById("SWReadout").innerHTML = MS2HMST(nElapsed);
 }
 else {
  nElapsed = StartClicked.EndTime - StartClicked.StartTime;
  document.getElementById("SWReadout").innerHTML = MS2HMST(nElapsed);
 }
}

function MS2HMST(nMS) {
 var milliseconds = parseInt((nMS%1000)/100), seconds = parseInt((nMS/1000)%60), minutes = parseInt((nMS/(1000*60))%60), hours = parseInt((nMS/(1000*60*60))%24);
 hours = (hours < 10) ? "0" + hours : hours;
 minutes = (minutes < 10) ? "0" + minutes : minutes;
 seconds = (seconds < 10) ? "0" + seconds : seconds;
 return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
// End of StopWatch Functions

// Start of CPI Functions
function UpdateBP() {
  var nDifference = 0;
  var sStartingValue = 0;
  var nThisYear = '2016';
  var aCPIYears = new Array("1.010101010", "1.010000000", // 1913
  "1.079207921", "1.174311927", "1.179687500", "1.145695364", "1.156069364", // 1915
  "0.895000000", "0.938547486", "1.017857143", "1.000000000", "1.023391813", // 1920
  "1.011428571", "0.983050847", "0.982758621", "1.000000000", "0.976608187", // 1925
  "0.910179641", "0.901315789", "0.948905109", "1.030769231", "1.022388060", // 1930
  "1.014598540", "1.035971223", "0.979166667", "0.985815603", "1.007194245",
  "1.050000000", "1.108843537", "1.061349693", "1.017341040", "1.022727273",
  "1.083333333", "1.143589744", "1.080717489", "0.987551867", "1.012605042",
  "1.078838174", "1.019230769", "1.007547170", "1.007490637", "0.996282528",
  "1.014925373", "1.033088235", "1.028469751", "1.006920415", "1.017182131",
  "1.010135135", "1.010033445", "1.013245033", "1.013071895", "1.016129032",
  "1.028571429", "1.030864198", "1.041916168", "1.054597701", "1.057220708",
  "1.043814433", "1.032098765", "1.062200957", "1.110360360", "1.091277890",
  "1.057620818", "1.065026362", "1.075907591", "1.113496933", "1.134986226",
  "1.103155340", "1.061606161", "1.032124352", "1.043172691", "1.035611165",
  "1.018587361", "1.036496350", "1.041373239", "1.048182587", "1.054032258",
  "1.042081102", "1.030102790", "1.029935852", "1.025605536", "1.028340081",
  "1.029527559", "1.022944551", "1.015576324", "1.022085890", "1.033613445",
  "1.028455285", "1.015810277", "1.022790439", "1.026630435", "1.033880360",
  "1.032258065", "1.028482143", "1.038395501", "0.996442223", "1.016402765", // 2005
  "1.031565286", "1.020694499", "1.014647595", "1.016221878", "1.001186976", // 2010
  "1.013581304"
  );

  var nYearOffset = nThisYear - aCPIYears.length;
  document.getElementById('CPIStartingAmount').value = document.getElementById('CPIStartingAmount').value.replace("$", "");
  if (document.getElementById('CPIStartYear').value == document.getElementById('CPIEndYear').value) {
    var sSameValue = document.getElementById('CPIStartingAmount').value;
    document.getElementById('CPIResultAmount').innerHTML = '<b>$' + numberWithCommas(sSameValue) + "</b>";
  }
  else if (document.getElementById('CPIStartYear').value > document.getElementById('CPIEndYear').value) {
    nDifference = document.getElementById('CPIStartYear').value - document.getElementById('CPIEndYear').value;
    sStartingValue = document.getElementById('CPIStartingAmount').value;
    var sEndYear = document.getElementById('CPIEndYear').value - nYearOffset;
    for (x=sEndYear; x<nDifference + sEndYear; x++)
      sStartingValue /= aCPIYears[x];
    document.getElementById('CPIResultAmount').innerHTML = '<b>$' + numberWithCommas(roundNumber(sStartingValue, 2).toFixed(2)) + "</b>";
  }
  else if (document.getElementById('CPIStartYear').value < document.getElementById('CPIEndYear').value) {
    nDifference = document.getElementById('CPIEndYear').value - document.getElementById('CPIStartYear').value;
    sStartingValue = document.getElementById('CPIStartingAmount').value;
    var sStartingYear = document.getElementById('CPIStartYear').value - nYearOffset;
    for (x=sStartingYear; x<nDifference + sStartingYear; x++)
      sStartingValue *= aCPIYears[x];
    var nResult = roundNumber(sStartingValue, 2).toFixed(2);
    document.getElementById('CPIResultAmount').innerHTML = '<b>$' + numberWithCommas(nResult) + "</b>";
  }
  if (document.getElementById('CPIEndYear').value == nThisYear)
    document.getElementById('CPITransLine').innerHTML = 'has the same buying power in';
  else
    document.getElementById('CPITransLine').innerHTML = 'had the same buying power in';

  document.getElementById('CPIStartingAmount').value = "$" + document.getElementById('CPIStartingAmount').value;
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// End of CPI Functions

// Start of FV Functions
function ChangeFVCalc() {
  ChangeFVCalc.sFVCalcType = document.getElementById('FVCalcType').value;

  if ('Find Future Value' == ChangeFVCalc.sFVCalcType) {
    document.getElementById('FVFutureValue').readOnly = true;
    document.getElementById('FVPresentValue').readOnly = false;
    document.getElementById('FVNumOfPeriods').readOnly = false;
    document.getElementById('FVFutureValue').style.backgroundColor = '#f1f1f1';
    document.getElementById('FVPresentValue').value = UpdateFV.sPresentValue;
    document.getElementById('FVPresentValue').style.backgroundColor = 'white';
    document.getElementById('FVNumOfPeriods').value = UpdateFV.sNumOfPeriods;
    document.getElementById('FVNumOfPeriods').style.backgroundColor = 'white';
    document.getElementById('FVRate').disabled = false;
    document.getElementById('FVRate').style.display = 'inline';
  }
  else if ('Find Present Value' == ChangeFVCalc.sFVCalcType) {
    document.getElementById('FVFutureValue').readOnly = false;
    document.getElementById('FVPresentValue').readOnly = true;
    document.getElementById('FVNumOfPeriods').readOnly = false;
    document.getElementById('FVFutureValue').value = UpdateFV.sFutureValue;
    document.getElementById('FVFutureValue').style.backgroundColor = 'white';
    document.getElementById('FVFutureValue').style.borderStyle = 'inset';
    document.getElementById('FVPresentValue').style.backgroundColor = '#f1f1f1';
    document.getElementById('FVNumOfPeriods').value = UpdateFV.sNumOfPeriods;
    document.getElementById('FVNumOfPeriods').style.backgroundColor = 'white';
    document.getElementById('FVRate').disabled = false;
    document.getElementById('FVRate').style.display = 'inline';
  }
  else if ('Find Rate' == ChangeFVCalc.sFVCalcType) {
    document.getElementById('FVFutureValue').readOnly = false;
    document.getElementById('FVPresentValue').readOnly = false;
    document.getElementById('FVNumOfPeriods').readOnly = false;
    document.getElementById('FVFutureValue').value = UpdateFV.sFutureValue;
    document.getElementById('FVFutureValue').style.backgroundColor = 'white';
    document.getElementById('FVFutureValue').style.borderStyle = 'inset';
    document.getElementById('FVPresentValue').value = UpdateFV.sPresentValue;
    document.getElementById('FVPresentValue').style.backgroundColor = 'white';
    document.getElementById('FVNumOfPeriods').value = UpdateFV.sNumOfPeriods;
    document.getElementById('FVNumOfPeriods').style.backgroundColor = 'white';
    document.getElementById('FVRate').style.display = 'none';
    document.getElementById('FVRate').disabled = true;
  }
  else if ('Find Number of Periods' == ChangeFVCalc.sFVCalcType) {
    document.getElementById('FVFutureValue').readOnly = false;
    document.getElementById('FVPresentValue').readOnly = false;
    document.getElementById('FVNumOfPeriods').readOnly = true;
    document.getElementById('FVFutureValue').value = UpdateFV.sFutureValue;
    document.getElementById('FVFutureValue').style.backgroundColor = 'white';
    document.getElementById('FVFutureValue').style.borderStyle = 'inset';
    document.getElementById('FVPresentValue').value = UpdateFV.sPresentValue;
    document.getElementById('FVPresentValue').style.backgroundColor = 'white';
    document.getElementById('FVNumOfPeriods').style.backgroundColor = '#f1f1f1';
    document.getElementById('FVRate').disabled = false;
    document.getElementById('FVRate').style.display = 'inline';
  }
  UpdateFV();
}

function UpdateFV() {
  document.getElementById('FVRateLable').innerHTML = document.getElementById('FVRate').value + '%';
  if (typeof ChangeFVCalc.sFVCalcType == 'undefined')
    ChangeFVCalc.sFVCalcType = document.getElementById('FVCalcType').value;
  if ('Find Future Value' == ChangeFVCalc.sFVCalcType) {
    UpdateFV.sPresentValue = document.getElementById('FVPresentValue').value;
    UpdateFV.sNumOfPeriods = document.getElementById('FVNumOfPeriods').value;
    UpdateFV.sRate = document.getElementById('FVRate').value;
    UpdateFV.sFutureValue = FV(UpdateFV.sPresentValue, UpdateFV.sNumOfPeriods, UpdateFV.sRate);
    UpdateFV.sFutureValue = roundNumber(UpdateFV.sFutureValue, 2);
    UpdateFV.sFutureValue = UpdateFV.sFutureValue.toFixed(2);
    document.getElementById('FVFutureValue').value = 'Future Value is ' + UpdateFV.sFutureValue;
  }
  else if ('Find Present Value' == ChangeFVCalc.sFVCalcType) {
    UpdateFV.sNumOfPeriods = document.getElementById('FVNumOfPeriods').value;
    UpdateFV.sRate = document.getElementById('FVRate').value;
    UpdateFV.sFutureValue = document.getElementById('FVFutureValue').value;
    UpdateFV.sPresentValue = PV(UpdateFV.sFutureValue, UpdateFV.sNumOfPeriods, UpdateFV.sRate);
    UpdateFV.sPresentValue = roundNumber(UpdateFV.sPresentValue, 2);
    UpdateFV.sPresentValue = UpdateFV.sPresentValue.toFixed(2);
    document.getElementById('FVPresentValue').value = 'Present Value is ' + UpdateFV.sPresentValue;
  }
  else if ('Find Rate' == ChangeFVCalc.sFVCalcType) {
    UpdateFV.sNumOfPeriods = document.getElementById('FVNumOfPeriods').value;
    UpdateFV.sPresentValue = document.getElementById('FVPresentValue').value;
    UpdateFV.sFutureValue = document.getElementById('FVFutureValue').value;
    UpdateFV.sRate = Rate(UpdateFV.sPresentValue, UpdateFV.sFutureValue, UpdateFV.sNumOfPeriods);
    UpdateFV.sRate = roundNumber(UpdateFV.sRate, 5);
    UpdateFV.sRate = UpdateFV.sRate.toFixed(5);
    document.getElementById('FVRateLable').innerHTML = 'Rate is ' + (UpdateFV.sRate * 100) + '%';
    document.getElementById('FVRate').value = UpdateFV.sRate * 100;
  }
  else if ('Find Number of Periods' == ChangeFVCalc.sFVCalcType) {
    UpdateFV.sPresentValue = document.getElementById('FVPresentValue').value;
    UpdateFV.sRate = document.getElementById('FVRate').value;
    UpdateFV.sFutureValue = document.getElementById('FVFutureValue').value;
    UpdateFV.sNumOfPeriods = NPer(UpdateFV.sPresentValue, UpdateFV.sFutureValue, UpdateFV.sRate);
    UpdateFV.sNumOfPeriods = roundNumber(UpdateFV.sNumOfPeriods, 5);
    UpdateFV.sNumOfPeriods = UpdateFV.sNumOfPeriods.toFixed(5);
    document.getElementById('FVNumOfPeriods').value = 'Number of Periods: ' + UpdateFV.sNumOfPeriods;
  }
}

function FV (PV, n, r) {
  return PV*Math.pow(1+r/100, n);
}

function PV (FV, n, r) {
  return FV*(1/Math.pow(1+r/100, n));
}

function Rate (PV, FV, n) {
  return Math.pow((FV/PV), 1/n) - 1;
}

function NPer (PV, FV, r) {
  return Math.log(FV/PV)/Math.log(1+(r/100));
}
// End of FV Functions

// Start of Tip Functions
function UpdateTip() {
  document.getElementById('TipPercentageLable').innerHTML = document.getElementById('TipPercentage').value + '%';
  var sTipBill = document.getElementById('TipBill').value;
  var sTipPercentage = document.getElementById('TipPercentage').value/100;
  var sTip = Number(sTipBill) * Number(sTipPercentage);
  var sTipTotal = Number(sTipBill) + Number(sTip);
  if (document.getElementById('TipRound').checked) {
    var sTipTotalRndUp = Number(sTipTotal) + 1;
    var sExtra = Number(sTipTotalRndUp.toFixed(0)) - Number(sTipTotal);
    if (sExtra > 0.99)
      sExtra -= 1;
    sTip += sExtra;
    sTipTotal = Number(sTipBill) + Number(sTip);
  }

  document.getElementById('TipTip').innerHTML = 'Tip = $' + sTip.toFixed(2);
  document.getElementById('TipTotal').innerHTML = 'Total = $' + sTipTotal.toFixed(2);
}
// End of Tip Functions


// Start of MLB Magic Number functions
function CalculateMagicNumber() {
  var nLoss = Number(document.getElementById('LostNum').value);
  var nDivWinNum = Number(document.getElementById('DivWinNum').value);
  var nLeagueGames = Number(document.getElementById('MNSport').value);
  if (nLoss && nDivWinNum)
    document.getElementById('MagicNum').innerHTML = "<div class='MagicNumber'>" + ((nLeagueGames + 1) - (nLoss + nDivWinNum)) + "</div>";
}
// End of MLB Magic Number functions

// Start of BMI functions
function cal_bmi(lbs, ins) {
  h2 = ins * ins;
  bmi = lbs/h2 * 703;
  f_bmi = Math.floor(bmi);
  diff  = bmi - f_bmi;
  diff = diff * 10;
  diff = Math.round(diff);

  if (diff == 10) {   // Need to bump up the whole thing instead
    f_bmi += 1;
    diff   = 0;
  }
  bmi = f_bmi + "." + diff;
  return bmi;
}

function UpdateBMI() {
  var nFeet, nInches, nTotalInches, nLbs, nBMI = 0;
  nLbs = Number(document.getElementById('Weight').value);
  if (isNaN(nLbs)) {
    document.getElementById('BMIResult').innerHTML = "<div class='MagicNumber' style='color: #424242;'>?<br><span style='font-size: 50%;'>(weight is not a number)</span></div>";
    return;
  }
  nFeet = Number(document.getElementById('HeightFeet').value);
  nInches = Number(document.getElementById('HeightInches').value);
  nTotalInches = (nFeet * 12) + nInches;
  nBMI = cal_bmi(nLbs, nTotalInches);
  if (nBMI < 18.5) // Underweight
    document.getElementById('BMIResult').innerHTML = "<div class='MagicNumber' style='color: blue;'>BMI:  " + nBMI + "<br><span style='font-size: 50%;'>(underweight)</span></div>";
  else if (nBMI > 29.9) // Obese
    document.getElementById('BMIResult').innerHTML = "<div class='MagicNumber' style='color: darkred;'>BMI:  " + nBMI + "<br><span style='font-size: 50%;'>(obese)</span></div>";
  else if (nBMI > 24.9) // Overweight
    document.getElementById('BMIResult').innerHTML = "<div class='MagicNumber' style='color: red;'>BMI:  " + nBMI + "<br><span style='font-size: 50%;'>(overweight)</span></div>";
  else // Normal Weight
    document.getElementById('BMIResult').innerHTML = "<div class='MagicNumber' style='color: green;'>BMI:  " + nBMI + "<br><span style='font-size: 50%;'>(normal weight)</span></div>";
}
// End of BMI functions
