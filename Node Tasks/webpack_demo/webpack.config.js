const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports={
    mode:"development"
    plugins: [
        new MiniCssExtractPlugin({
         filename: "[name].css",
         chunkFilename: "[id].css"
     })
 ]
}