# rnTest
On your terminal run this command to play this apps!

1. git clone https://github.com/arifrach31/rnTest.git
2. Npm install 
3. react-native link
4. open directory node_modules/rn-host-detect/index.js
5. bellow module.exports = function (hostname) {
6. change host !== 'localhost' to host !== '10.0.3.2'
7. save and exit
8. react-native run-android

note : On Android emulator, the IP of host is `10.0.2.2` (Genymotion: 10.0.3.2)
