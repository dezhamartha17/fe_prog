import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "http://127.0.0.1:8080/presensi";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}