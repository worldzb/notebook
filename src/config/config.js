/*
* @Author: worldzb
* @Date:   2018-01-25 21:41:24
* @Last Modified by:   worldzb
* @Last Modified time: 2018-02-22 21:28:12
*/

const root_path='http://localhost:80/www3/home-server/public/api/v1/';//api根目录

const urls_dev={
	getMyBook:root_path+'getBookList',
	getNewDoc:root_path+'getNewDoc',
	getChapter:root_path+'getChapter',
	getContent:root_path+'getContent',

	createBook:root_path+'createBook',
	createChapter:root_path+'createChapter',
	createNewDoc:root_path+'createNewDoc',
	createDoc:root_path+'createDoc',
}

const urls_pro={

}


const config={
	version:'1.0.0(开发版)',
	appName:'世界周边',
	urls:urls_dev,
};
export default config;