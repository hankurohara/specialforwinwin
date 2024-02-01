const genText = document.getElementById("gen-text")

genText.addEventListener("click", function() {
  let messages = [
    "I loved you, I love you and I will love you forever!",
    "thanks you for being my support shoulder in my though times",
    "terimakasih udah peduli sama aku",
    "My disappearance doesn't mean I'm not always there for you, you're like the moon and I'm the star, who is always there every night and always there at all times",
    "selalu jaga kesehatan ya, jangan lupa istirahat yang cukup, jangan sering begadang ya,",
    "thanks you for always being my rainbow after the strom",
    "seeing your smile is happiness for me",
    "To the world, maybe you are one person. But for one person, you are the world",
    "hii? semangatt yaa , cape bole nyerah jangan okkeii? kalo perlu apa apa bilang ya , butuh rumah? aku siap jadi rumah kamu , I'm always there for you ..",
    "You make my smile", 
    "suatu saat nanti akan tiba saatnya kamu akan menoleh kebelakang dan tersenyum bangga, karena kamu bisa melewati masa yang sangat sulit dalam prosesmu",
    "kemanapun alur cerita hidupmu,tetaplah bahagia menjadi manusia, tetaplah hidup sebagaimana mestinya,tetaplah tertawa dicela gaduhnya isi kepala, tetaplah menjadi diri sendiri yang aku kenal yaa",
    "matamu seperti bulan yang tampak redup, selalu berhasil sepasang mataku kagum", 
    "i hope you that i appreciate you more than you'll ever know now matters how this ends,thanksyou for being here, thankyou for being my comfort person",
    "untukkmuuu orang terpenting dalam hidupkuu",
    "jaga diri baik baik ya, jaga kesehatan,jangan lupa buat rajin beribadah yaa, aku tau aku tidak bs merubahmu, jadilah yang terbaik sesuai keinginanmu, jadilah yang terbaik menurutmu",
    "semangat yaa,yang kuatt,kamuu udah hebat udah bisaa bertahan sejauh ini aku bangga sama kamuu,kamu ga sendiri adaa aku disini jangan pernah sungkan yaa",
    "hallo, kalau kamu cape dengan hidup, gapapa kamu berhak cape, tpi kamu gaboleh nyerah, nyerah bukan pilihan yg baik",
    "apapun yg terjadi hari ini atau hari kedepannya kamu harus tetap terima, hall baik membutuhkan waktu, kamu ga akan selamanya akan sedih oke? semangat winnn.",
    "everything gonna be okay, roda itu berputar ga selamanya kamu sedih terus menerus. So proud of you,semangat yaaa",
    "kamu tau gak?, ketemu kamu itu salah satu dari banyak hal yang buat aku bersyukur aku beruntung banget",
    "aku tau kamu hebat kok, buktinya kamu bisa sampai dititik ini iya kan?im so proud of you, mungkin saat ini kamu lagi cape dengan masalah yang kamu hadapi berkali-kali",
    "jangan kecewa lagi sama diri kamu sendiri ya?ini cukup kok, kamu udah ngelakuin yang terbaik. kalo kamu capek istirahat yaaa, ga ada yang namanya nyerah", 
    "udah bisa bertahan sampai dititik ini juga lebih dari cukup kok, sayangi dirimu sendiri ya?bangga lah pada setiap proses yang kamu lakuin karena setiap proses akan membentuk mu menjadi lebih baik.",
    "gak ada yang perlu kamu khawatirkan tentang apapun itu, kamu sudah melakukan yang terbaik ko",
    "meskipun kita ga pernah ketemu/jarang ngechat,but i know gimana keadaan km sekarang aku bangga sma semua yg kamu udah perjuangin selama inii.. SEMANGGAAATTT🧸❣",
    "aku emg gatau seberapa besar masalah kamu, but take a deep breath jgn terlalu maksain diri yaa",
    "u did well,aku bangga banget sama kamu,ada aku yang bakal selalu apresiasi apapun yang kamu lakuin, okey? so jangan sedih lagi yaa, ada aku kok disini.",
    "walaupun kita ngerasa kaya ngejauh gitu, aku bakalan selalu ada disini buat kmu kok, ttp jadi manusia kuat ya, aku yakin kmu bisa ngelewatin smua masalah yang kamu dapatin, jngn lupa bhgia",
    "In my eyes, you are perfect.",
    "You bring happiness into my life",
  ]
  const textEl = document.querySelector(".textMessage")
  textEl.textContent = messages[Math.floor( Math.random(1)*messages.length )]
})