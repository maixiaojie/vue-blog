import axios from 'axios'

let host = 'http://mcust.cn/mcBlog/index.php'

function get(url, callback) {
	axios.get(host + url).then(function(res) {
		callback(res)
	})
}
function post(url, data, callback) {
	axios.post(host + url, data).then(function(res) {
		callback(res)
	})
}
export default {
	get: get(url, callback),
	post: post(url, data, callback)
}