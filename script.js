var vm = new Vue({
  el: "#app",
  data: {
    company: {
      chineseName: "企鵝王國玩具專賣店",
      englishName: "PenguinToyLand",
      logoUrl: "https://i.imgur.com/FcY2YoR.png",
      phone: "02-8877-7788",
      address: "100 台北市忠孝東路走九遍",
      website: "www.PenguinToyLand.com"
    },
    user: {
      chineseName: "鄧小鵝",
      englishName: "Yuru Deng",
      title: "忠孝旗艦館店長",
      phone: "0988-168-168",
      ext: "520",
      lineID: "penguintoylandyuru"
    },
    card: {
      font: "",
      background: "#efede8",
      backgroundImageBig: "#245A75",
      backgroundImageSmall: "#222",
      fontDarkColor: "#3D3D3D",
      fontLightColor: "#75664b"
    }
  }
})


$(".btnToSecond").click(function(){
  $(".inputPageOne").hide()
  $(".inputPageTwo").show()
})

$(".btnToDone").click(function(){
  $(".inputArea").hide()
  $(".card").addClass("float")
  $(".infotext").text("名片完成囉！希望你會喜歡😋")
  $(".btnBackToStart").show()
})

$(".btnBack").click(function(){
  $(".inputPageOne").show()
  $(".inputPageTwo").hide()
})


$(".btnBackToStart").click(function(){
  $(".inputArea").show()
  $(".inputPageOne").show()
  $(".inputPageTwo").hide()
  $(".infotext").text("")
  $(".btnBackToStart").hide()
})


// $(".btn_cwTeXKai").click(function(){
//   $(".card").addClass("cwTeXKai")
//   $(".card").removeClass("MicrosoftJhengHei")
//   $(".card").removeClass("NotoSansTC")
//   $(".card").removeClass("cwTeXYen")
//   $(".card").removeClass("NotoSerifTC")
//   $(".card").removeClass("cwTeXFangSong")
//   $(".card").removeClass("cwTeXMing")
// })
// $(".btn_MicrosoftJhengHei").click(function(){
//   $(".card").removeClass("cwTeXKai")
//   $(".card").addClass("MicrosoftJhengHei")
//   $(".card").removeClass("NotoSansTC")
//   $(".card").removeClass("cwTeXYen")
//   $(".card").removeClass("NotoSerifTC")
//   $(".card").removeClass("cwTeXFangSong")
//   $(".card").removeClass("cwTeXMing")
// })
// $(".btn_NotoSansTC").click(function(){
//   $(".card").removeClass("cwTeXKai")
//   $(".card").removeClass("MicrosoftJhengHei")
//   $(".card").addClass("NotoSansTC")
//   $(".card").removeClass("cwTeXYen")
//   $(".card").removeClass("NotoSerifTC")
//   $(".card").removeClass("cwTeXFangSong")
//   $(".card").removeClass("cwTeXMing")
// })
// $(".btn_cwTeXYen").click(function(){
//   $(".card").removeClass("cwTeXKai")
//   $(".card").removeClass("MicrosoftJhengHei")
//   $(".card").removeClass("NotoSansTC")
//   $(".card").addClass("cwTeXYen")
//   $(".card").removeClass("NotoSerifTC")
//   $(".card").removeClass("cwTeXFangSong")
//   $(".card").removeClass("cwTeXMing")
// })
// $(".btn_NotoSerifTC").click(function(){
//   $(".card").removeClass("cwTeXKai")
//   $(".card").removeClass("MicrosoftJhengHei")
//   $(".card").removeClass("NotoSansTC")
//   $(".card").removeClass("cwTeXYen")
//   $(".card").addClass("NotoSerifTC")
//   $(".card").removeClass("cwTeXFangSong")
//   $(".card").removeClass("cwTeXMing")
// })
// $(".btn_cwTeXFangSong").click(function(){
//   $(".card").removeClass("cwTeXKai")
//   $(".card").removeClass("MicrosoftJhengHei")
//   $(".card").removeClass("NotoSansTC")
//   $(".card").removeClass("cwTeXYen")
//   $(".card").removeClass("NotoSerifTC")
//   $(".card").addClass("cwTeXFangSong")
//   $(".card").removeClass("cwTeXMing")
// })
// $(".btn_cwTeXMing").click(function(){
//   $(".card").removeClass("cwTeXKai")
//   $(".card").removeClass("MicrosoftJhengHei")
//   $(".card").removeClass("NotoSansTC")
//   $(".card").removeClass("cwTeXYen")
//   $(".card").removeClass("NotoSerifTC")
//   $(".card").removeClass("cwTeXFangSong")
//   $(".card").addClass("cwTeXMing")
// })