module.exports = {
    devServer:{
      host:'localhost',
      port:8081,
      proxy:{
        '/api':{
          target:'http://mall-pre.springboot.cn',
          changeOrigin:true,
          pathRewrite:{
            '/api':''
          }
        }
      }
    },
    // publicPath:'/app',
    outputDir:'dist2',
    // indexPath:'index2.html',
    // lintOnSave:false,
    productionSourceMap:false,
    chainWebpack:(config)=>{
      config.plugins.delete('prefetch');
      
    },
    // configureWebpack: (config) => {
    //   // 公共代码抽离
    //   config.optimization = {
    //     splitChunks: {
    //       cacheGroups:{
    //         vendor: {
    //           chunks: 'all',
    //           test: /node_modules/,
    //           name: 'vendor',
    //           minChunks:1,
    //           maxInitialRequests:5,
    //           minSize: 0,
    //           priority: 100
    //         },
    //         common: {
    //           chunks: 'all',
    //           test: /[\\/]src[\\/]js[\\/]/,
    //           name: 'common',
    //           minChunks:2,
    //           maxInitialRequests:5,
    //           minSize: 0,
    //           priority: 60
    //         },
    //         styles: {
    //           name: 'styles',
    //           test: /\.(sa|sc|c)ss$/,
    //           chunks: 'all',
    //           enforce: true
    //         },
    //         runtimeChunk: {
    //           name: 'mainfest'
    //         }
    //       }
    //     }
    //   }
    // }
  }