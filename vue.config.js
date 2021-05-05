module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        /*'router': '@/assets',
        'store': '@/assets',*/
        'views': '@/views',
      }
    }
  }
}
