// Database Config
const dbUser = "postgres";
const dbPass = "1234";
const database = "pettycash";

module.exports = {
	connectionString : "postgres://"+dbUser+":"+dbPass+"@localhost:5432/"+database
}