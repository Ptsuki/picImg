
import Compressor from 'compressorjs'
const HandleCompressor = function (file, quality, params, func = null) {
  /**
   * file：图片文件
   * quality: 图片质量
   * func：执行上传方法
   * params: 传递的信息消息体
   */
  const res = new Compressor(file, {
    quality,
    success(result) {
      console.log(result)
      if (func) func(result, params)
    },
    error(err) {
      console.log(err.message)
    }
  })
  return res
}

const NewHandleCompressor = function (file, quality, params, func = null) {
  /**
   * file：图片文件
   * quality: 图片质量
   * func：执行上传方法
   * params: 传递的信息消息体
   */
  return new Promise((resolve, reject) => {
    const res = new Compressor(file, {
      quality,
      success(result) {
        console.log(result)
        resolve(res)
        if (func) func(result, params)
      },
      error(err) {
        console.log(err.message)
      }
    })
    // resolve(res)
  })
}

export {
  HandleCompressor, NewHandleCompressor
}
