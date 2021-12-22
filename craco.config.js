const CracoLessPlugin = require('craco-less');

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: { '@primary-color': 'rgb(0 165 65)' },
						javascriptEnabled: true
					}
				}
			}
		}
	]
};
