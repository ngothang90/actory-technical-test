// import_to_firebase.js
const admin = require("firebase-admin");
// Tải file khóa bảo mật (serviceAccountKey.json) từ Firebase Project Settings -> Service Accounts
const serviceAccount = require("./serviceAccountKey.json"); 
const questions = require("./questions_data.js");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function uploadQuestions() {
  console.log("Bắt đầu đẩy dữ liệu câu hỏi lên Firebase...");
  
  let batch = db.batch();
  let count = 0;

  for (let i = 0; i < questions.length; i++) {
    const docRef = db.collection("questions").doc(); // Tạo document ngẫu nhiên
    batch.set(docRef, questions[i]);
    count++;

    // Firestore giới hạn batch tối đa 500 thao tác một lần
    if (count % 400 === 0 || i === questions.length - 1) {
      await batch.commit();
      console.log(`Đã đẩy thành công ${count} câu hỏi...`);
      batch = db.batch();
    }
  }

  console.log("HOÀN TẤT! Toàn bộ câu hỏi đã sẵn sàng trên cơ sở dữ liệu web.");
  process.exit(0);
}

uploadQuestions().catch((error) => {
  console.error("Lỗi khi đẩy dữ liệu:", error);
});