var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abdallahservice005@gmail.com',
    pass: 'pshf hgo]lhj'
  }
});

var mailOptions = {
  from: 'abdallahservice005@gmail.com',
  to: '1190515@student.birzeit.edu, abdallahdaoud37@gmail.com, amaldaoud552@gmail.com',
//   subject: 'Sending multiple email using Node.js',
//   text: 'good!'
    subject: 'Sending html email using Node.js',
    html: '<h1 style="color: red">Message</h1><p>This is a nice test!</p>'
};
async function sleep() {
    for(let i=1;; i++) {
        function sl() {return new Promise(resolve => setTimeout(resolve, 1000))};
        await sl();
        transporter.sendMail(
        {
            from: 'abdallahservice005@gmail.com',
            // to: /*'1190515@student.birzeit.edu, abdallahdaoud37@gmail.com,*/ 'amaldaoud552@gmail.com',
            to: 'abdallahdaoud37@gmail.com',
        //   subject: 'Sending multiple email using Node.js',
        //   text: 'good!'
            subject: 'رسالة' + i,
            html: '<h1 style="color: red">مرحبا</h1><p>كيف الصحة</p>'
        }, 
        function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log(i);
                // console.log('Email sent: ' + info.response);
            }
        });
    }
}
sleep();