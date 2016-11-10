 var config = {
   entry: __dirname + '/main.js',
	
   output: {
      path:__dirname + '/',
      filename: 'index.min.js',
   },
	
   devServer: {
      inline: true,
      port: 7777
   },
	
   module: {
      loaders: [ 
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
   			
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            test: /\.css$/,
            loader: 'style!css'//样式加载器 跟前面相比就在后面加上了?modules 注意:加上?modules会对ID,CLASS加密
         }
      ]
   }
	
}

module.exports = config;