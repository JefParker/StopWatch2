// JavaScript Document

function OnLoadWebsite() {
	document.getElementById("Header").innerHTML = MakeLogo("Stop", "Watch", true, true);
	document.getElementById("Header").addEventListener("click", MakeHomePage);
}

function MakeHomePage() {
  var sPage = '';
	sPage += "<div id='HomeLogo' class='Copy' style='font-size: 75%; text-align: center;'>"+MakeLogo("Stop", "Watch", true, true)+"</div>";
  sPage += "<div id='Copyright' class='Copy' style='font-size: 75%; text-align: center;'>&copy; " + YearInRomanNumerals() + " The Inchoate Company</div>";
  document.getElementById("Main").innerHTML = sPage;
	document.getElementById("Copyright").addEventListener("click", MakeAboutUsPage);
}

function MakeAboutUsPage() {
  var sPage = '';
	sPage += "<div id='InchoateLogo' style='text-align: left; margin-top: 0px; margin-top: 3px; font-size: 75%;'></div>";
	sPage += "<div class='Copy' style='font-size: 80%; text-align: center; margin-top: 50px;'>";
	sPage += "<p><a href='https://chrome.google.com/webstore/detail/stopwatch/lifnoadagfppcljadelgkjddidcnjbcc' target='_blank'>StopWatch</a>, Version 0.0.1.0</p>";
  sPage += "</p>";
	sPage += "</div>";
  document.getElementById("Main").innerHTML = sPage;
}

function MakeStopWatchPage() {
  var sPage = '';
  sPage += "<div id='SWLogo' style='text-align: left; margin-top: 0px; margin-top: 3px; font-size: 75%;'>"+MakeLogo("Stop", "Watch", false, false)+"</div>";
  sPage += "<div id='SWReadout' class='TitleText' style='font-size: 35px; border: 1px; box-shadow: 5px 5px 5px #9A9A9A; border-radius: 5px; background-color: Maroon;'>";
  sPage += "00:00:00.0";
  sPage += "</div>"; // SWReadout
  sPage += "<p style='font-size: 3px;'>&nbsp;</p>";
  sPage += "<div style='margin-right: auto; margin-left: auto; text-align: center;'>";
  sPage += "<button id='SWReset' value='Reset' style='disabled: true;' data-inline='true' data-mini='true'>Lap</button>";
  sPage += "<button id='SWStart' value='Start' data-inline='true' data-mini='true'>Start</button>";
  sPage += "<textarea id='LapList' class='Copy' style='border: 0; font-size: 11px; height: 150px; background-color: #f1f1f1;' readonly></textarea>";
  sPage += "</div>";
  document.getElementById("Main").innerHTML = sPage;
	document.getElementById("SWReset").addEventListener("click", ResetClicked);
	document.getElementById("SWStart").addEventListener("click", StartClicked);
	document.getElementById('SWReset').disabled = true;
  StartClicked.Start = false;
  ResetClicked.Reset = "Lap";
  ResetClicked.LapList = '';
  StartClicked.ElapsedTime = 0;
}

function MakeTipCalcPage() {
  var sPage = '';
  sPage += "<input type='text' id='TipBill' style='text-align: center;' placeholder='Bill' OnBlur='UpdateTip()' OnChange='UpdateTip()' OnInput='UpdateTip()' OnKeyUp='UpdateTip()' OnPaste='UpdateTip()'>";
  sPage += "<input type='range' id='TipPercentage' value='20' min='0' max='100' list='TipPercentageNum' OnChange='UpdateTip()'><p id='TipPercentageLable'>20%</p>";
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
  sPage += "<label>";
  sPage += "<input type='checkbox' name='TipRound' id='TipRound'>Round Up";
  sPage += "</label>";
  sPage += "<p id='TipTip' style='text-align: center; color: red;'>Tip</p>";
  sPage += "<p id='TipTotal' style='text-align: center; color: red;'>Total</p>";
  document.getElementById("Main").innerHTML = sPage;
	document.getElementById('TipRound').checked = true;
	document.getElementById("TipRound").addEventListener("change", UpdateTip);
}

function MakeFVCalcPage() {
  var sPage = '';
  sPage += "<select id='FVCalcType' data-mini='true' OnChange='ChangeFVCalc()'>";
  sPage += "<option value='Find Present Value'>Find Present Value</option>";
  sPage += "<option value='Find Number of Periods'>Find Number of Periods</option>";
  sPage += "<option value='Find Rate'>Find Rate</option>";
  sPage += "<option selected='selected' value='Find Future Value'>Find Future Value</option>";
  sPage += "</select>";
  sPage += "<input type='text' id='FVPresentValue' value='100' style='font-size: 80%; text-align: center;' placeholder='Present Value' OnBlur='UpdateFV()' OnChange='UpdateFV()' OnInput='UpdateFV()' OnKeyUp='UpdateFV()' OnPaste='UpdateFV()'>";
  sPage += "<input type='text' id='FVNumOfPeriods' value='1' style='font-size: 80%; text-align: center;' placeholder='# of Periods' OnBlur='UpdateFV()' OnChange='UpdateFV()' OnInput='UpdateFV()' OnKeyUp='UpdateFV()' OnPaste='UpdateFV()'>";
  sPage += "<input type='range' id='FVRate' value='15' min='0.00' max='100.00' OnChange='UpdateFV()'><p id='FVRateLable' for='FVRate'>15%</p>";
  sPage += "<input type='text' id='FVFutureValue' readonly value='Future Value is 115.00' style='font-size: 80%; text-align: center; background-color: #f1f1f1;' placeholder='# of Periods' OnBlur='UpdateFV()' OnChange='UpdateFV()' OnInput='UpdateFV()' OnKeyUp='UpdateFV()' OnPaste='UpdateFV()'>";
  document.getElementById("Main").innerHTML = sPage;
  UpdateFV();
}

function MakeCPICalcPage() {
  var sPage = '';
	sPage += "<div id='CPILogo' style='text-align: left; margin-top: 0px; margin-top: 3px; font-size: 75%;'></div>";
  sPage += "<p align='center'><input type='text' class='Copy' id='CPIStartingAmount' value='$100.00' maxlength='14' style='text-align: center;' data-inline='true' placeholder='Starting Amount' OnBlur='UpdateBP()' OnChange='UpdateBP()' OnInput='UpdateBP()' OnKeyUp='UpdateBP()' OnPaste='UpdateBP()'></p>";
  sPage += "<p class='Copy' style='text-align: center; margin-top: 0; font-size: 80%;'>in</p>";
  sPage += "<select id='CPIStartYear' data-mini='true' OnChange='UpdateBP()'>";
  sPage += "<option value='1913'>1913</option><option value='1914'>1914</option><option value='1915'>1915</option><option value='1916'>1916</option><option value='1917'>1917</option><option value='1918'>1918</option><option value='1919'>1919</option><option value='1920'>1920</option><option value='1921'>1921</option><option value='1922'>1922</option><option value='1923'>1923</option><option value='1924'>1924</option><option value='1925'>1925</option><option value='1926'>1926</option><option value='1927'>1927</option><option value='1928'>1928</option><option value='1929'>1929</option><option value='1930'>1930</option><option value='1931'>1931</option><option value='1932'>1932</option><option value='1933'>1933</option><option value='1934'>1934</option><option value='1935'>1935</option><option value='1936'>1936</option><option value='1937'>1937</option><option value='1938'>1938</option><option value='1939'>1939</option><option value='1940'>1940</option><option value='1941'>1941</option><option value='1942'>1942</option><option value='1943'>1943</option><option value='1944'>1944</option><option value='1945'>1945</option><option value='1946'>1946</option><option value='1947'>1947</option><option value='1948'>1948</option><option value='1949'>1949</option><option value='1950'>1950</option><option value='1951'>1951</option><option value='1952'>1952</option><option value='1953'>1953</option><option value='1954'>1954</option><option value='1955'>1955</option><option value='1956'>1956</option><option value='1957'>1957</option><option value='1958'>1958</option><option value='1959'>1959</option><option value='1960'>1960</option><option value='1961'>1961</option><option value='1962'>1962</option><option value='1963'>1963</option><option value='1964'>1964</option><option value='1965'>1965</option><option value='1966'>1966</option><option value='1967'>1967</option><option value='1968'>1968</option><option value='1969'>1969</option><option value='1968'>1968</option><option value='1969'>1969</option><option value='1970'>1970</option><option value='1971'>1971</option><option value='1972'>1972</option><option value='1973'>1973</option><option value='1974'>1974</option><option value='1975'>1975</option><option value='1976'>1976</option><option value='1977'>1977</option><option value='1978'>1978</option><option value='1979'>1979</option><option value='1980'>1980</option><option value='1981'>1981</option><option value='1982'>1982</option><option value='1983'>1983</option><option value='1984'>1984</option><option value='1985'>1985</option><option value='1986'>1986</option><option value='1987'>1987</option><option value='1988'>1988</option><option value='1989'>1989</option><option value='1990'>1990</option><option value='1991'>1991</option><option value='1992'>1992</option><option value='1993'>1993</option><option value='1994'>1994</option><option value='1995'>1995</option><option value='1996'>1996</option><option value='1997'>1997</option><option value='1998'>1998</option><option value='1999'>1999</option><option value='2000'>2000</option><option value='2001'>2001</option><option value='2002'>2002</option><option value='2003'>2003</option><option value='2004'>2004</option><option value='2005'>2005</option><option value='2006'>2006</option><option value='2007'>2007</option><option value='2008'>2008</option><option value='2009'>2009</option><option value='2010'>2010</option><option value='2011'>2011</option><option value='2003'>2012</option><option value='2013'>2013</option><option value='2014'>2014</option><option selected='selected' value='2015'>2015</option>";
  sPage += "</select>";
  sPage += "<p class='Copy' style='text-align: center; font-size: 80%;' id='CPITransLine'>has the same buying power in</p>";
  sPage += "<select id='CPIEndYear' data-mini='true' OnChange='UpdateBP()'>";
  sPage += "<option value='1913'>1913</option><option value='1914'>1914</option><option value='1915'>1915</option><option value='1916'>1916</option><option value='1917'>1917</option><option value='1918'>1918</option><option value='1919'>1919</option><option value='1920'>1920</option><option value='1921'>1921</option><option value='1922'>1922</option><option value='1923'>1923</option><option value='1924'>1924</option><option value='1925'>1925</option><option value='1926'>1926</option><option value='1927'>1927</option><option value='1928'>1928</option><option value='1929'>1929</option><option value='1930'>1930</option><option value='1931'>1931</option><option value='1932'>1932</option><option value='1933'>1933</option><option value='1934'>1934</option><option value='1935'>1935</option><option value='1936'>1936</option><option value='1937'>1937</option><option value='1938'>1938</option><option value='1939'>1939</option><option value='1940'>1940</option><option value='1941'>1941</option><option value='1942'>1942</option><option value='1943'>1943</option><option value='1944'>1944</option><option value='1945'>1945</option><option value='1946'>1946</option><option value='1947'>1947</option><option value='1948'>1948</option><option value='1949'>1949</option><option value='1950'>1950</option><option value='1951'>1951</option><option value='1952'>1952</option><option value='1953'>1953</option><option value='1954'>1954</option><option value='1955'>1955</option><option value='1956'>1956</option><option value='1957'>1957</option><option value='1958'>1958</option><option value='1959'>1959</option><option value='1960'>1960</option><option value='1961'>1961</option><option value='1962'>1962</option><option value='1963'>1963</option><option value='1964'>1964</option><option value='1965'>1965</option><option value='1966'>1966</option><option value='1967'>1967</option><option value='1968'>1968</option><option value='1969'>1969</option><option value='1968'>1968</option><option value='1969'>1969</option><option value='1970'>1970</option><option value='1971'>1971</option><option value='1972'>1972</option><option value='1973'>1973</option><option value='1974'>1974</option><option value='1975'>1975</option><option value='1976'>1976</option><option value='1977'>1977</option><option value='1978'>1978</option><option value='1979'>1979</option><option value='1980'>1980</option><option value='1981'>1981</option><option value='1982'>1982</option><option value='1983'>1983</option><option value='1984'>1984</option><option value='1985'>1985</option><option value='1986'>1986</option><option value='1987'>1987</option><option value='1988'>1988</option><option value='1989'>1989</option><option value='1990'>1990</option><option value='1991'>1991</option><option value='1992'>1992</option><option value='1993'>1993</option><option value='1994'>1994</option><option value='1995'>1995</option><option value='1996'>1996</option><option value='1997'>1997</option><option value='1998'>1998</option><option value='1999'>1999</option><option value='2000'>2000</option><option value='2001'>2001</option><option value='2002'>2002</option><option value='2003'>2003</option><option value='2004'>2004</option><option value='2005'>2005</option><option value='2006'>2006</option><option value='2007'>2007</option><option value='2008'>2008</option><option value='2009'>2009</option><option value='2010'>2010</option><option value='2011'>2011</option><option value='2003'>2012</option><option value='2013'>2013</option><option value='2014'>2014</option><option selected='selected' value='2015'>2015</option>";
  sPage += "</select>";
  sPage += "<p class='Copy' style='text-align: center; font-size: 80%;'>as</p>";
  sPage += "<p id='CPIResultAmount' class='Copy' style='text-align: center; margin-top: 0;'><b>$100.00</b></p>";
  document.getElementById("Main").innerHTML = sPage;
}

function MakeMagicNumberPage() {
  var sPage = '';
  sPage += "<div id='MagicNumberLogo' style='text-align: left; margin-top: 0px; margin-top: 3px; font-size: 75%;'></div>";
  sPage += "<select id='MNSport' data-mini='true' OnChange='CalculateMagicNumber()'>";
  sPage += "<option value='162'>MLB (regular)</option>";
  sPage += "<option value='82'>NBA (regular)</option>";
  sPage += "<option value='16'>NFL (regular)</option>";
  sPage += "<option value='82'>NHL (regular)</option>";
  sPage += "</select>";
  sPage += "<p>2nd place team's losses:  <input type='num' id='LostNum' placeholder='0' style='width: 25px; text-align: center;' OnBlur='CalculateMagicNumber()' OnChange='CalculateMagicNumber()' OnInput='CalculateMagicNumber()' OnKeyUp='CalculateMagicNumber()' OnPaste='CalculateMagicNumber()' /></p>";
  sPage += "<p>1st place team's wins: <input type='num' id='DivWinNum' placeholder='0' style='width: 25px; text-align: center;' OnBlur='CalculateMagicNumber()' OnChange='CalculateMagicNumber()' OnInput='CalculateMagicNumber()' OnKeyUp='CalculateMagicNumber()' OnPaste='CalculateMagicNumber()' /></p>";
  sPage += "<p>The elimination number (tragic number) for the 2nd place team is the <a href='http://www.wikiwand.com/en/Magic_number_(sports)' target='_blank'>magic number</a> for the 1st place team.  That number is...</p>";
  sPage += "<p id='MagicNum' style='font-size: 250%; color: blue;'>?</p>";
  document.getElementById("Main").innerHTML = sPage;
  document.getElementById("LostNum").addEventListener('change', CalculateMagicNumber, false);
  document.getElementById("DivWinNum").addEventListener('change', CalculateMagicNumber, false);
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

function MakeLogo(sFirst, sLast, bCentered, bImage) {
  var aColors = new Array("#00a0ff", "#2715aa", "#ffba00", "#d1664d", "#689360", "#25822f", "#c047ba", "#763575", "#91160d", "#ff1a08");
  var nColor = getRandomInt (0, aColors.length-1);
  var sLogo = "";
  if (bImage)
    sLogo += "<p align='center'><img src='/assets/StopWatch128.png'></p>";
  if (bCentered)
    sLogo += "<div class='CopyHeadline' style='color: gray; line-height: 100%;";
  else
    sLogo += "<span class='CopyHeadline' style='color: gray; line-height: 100%;";
  if (!bCentered)
    sLogo += "text-align: left;";
  sLogo += "'><span class='CopyHeadline300'>"+sFirst+"</span><span class='CopyHeadline900' style='color: " + aColors[nColor] + ";'>"+sLast+"</span>";
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
  document.getElementById("SWStart").disabled='false';
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
   document.getElementById("SWStart").disabled='true';
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
  var nThisYear = '2015';
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
  "1.031565286", "1.020694499", "1.014647595", "1.016221878", "0.999421296" // 2010
  );

  var nYearOffset = nThisYear - aCPIYears.length;
  document.getElementById('CPIStartingAmount').value = document.getElementById('CPIStartingAmount').value.replace("$", "");
  if (document.getElementById('CPIStartYear').value == document.getElementById('CPIEndYear').value) {
    var sSameValue = document.getElementById('CPIStartingAmount').value;
    document.getElementById('CPIResultAmount').innerHTML = '$' + sSameValue;
  }
  else if (document.getElementById('CPIStartYear').value > document.getElementById('CPIEndYear').value) {
    nDifference = document.getElementById('CPIStartYear').value - document.getElementById('CPIEndYear').value;
    sStartingValue = document.getElementById('CPIStartingAmount').value;
    var sEndYear = document.getElementById('CPIEndYear').value - nYearOffset;
    for (x=sEndYear; x<nDifference + sEndYear; x++)
      sStartingValue /= aCPIYears[x];
    document.getElementById('CPIResultAmount').innerHTML = '$' + roundNumber(sStartingValue, 2).toFixed(2);
  }
  else if (document.getElementById('CPIStartYear').value < document.getElementById('CPIEndYear').value) {
    nDifference = document.getElementById('CPIEndYear').value - document.getElementById('CPIStartYear').value;
    sStartingValue = document.getElementById('CPIStartingAmount').value;
    var sStartingYear = document.getElementById('CPIStartYear').value - nYearOffset;
    for (x=sStartingYear; x<nDifference + sStartingYear; x++)
      sStartingValue *= aCPIYears[x];
    document.getElementById('CPIResultAmount').innerHTML = '$' + roundNumber(sStartingValue, 2).toFixed(2);
  }
  if (document.getElementById('CPIEndYear').value == nThisYear)
    document.getElementById('CPITransLine').innerHTML = 'has the same buying power in';
  else
    document.getElementById('CPITransLine').innerHTML = 'had the same buying power in';

  document.getElementById('CPIStartingAmount').value = "$" + document.getElementById('CPIStartingAmount').value;
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
    document.getElementById('MagicNum').innerHTML = (nLeagueGames + 1) - (nLoss + nDivWinNum);
}
// End of MLB Magic Number functions
