import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '871609935764-mm0hhhfa19ts1p1k3r373n132b0cpkno.apps.googleusercontent.com',
});
const firebaseConfig = {
apiKey:'AIzaSyB8ybRGLFe3jxR6MED23tDGR7dDlNm_k1A',
authDomain:'bokia-8e6b0.firebaseapp.com	',
databaseURL:'https://bokia-8e6b0-default-rtdb.firebaseio.com/',
projectId:'bokia-8e6b0',
storageBucket:'bokia-8e6b0.appspot.com',
// messagingSenderId:'',
appId:'1:871609935764:android:fad07f6888cabc72a91181',

}
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export default ()=>{
    return{firebase,auth,database,storage};
}

