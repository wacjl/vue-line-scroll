export default{
    props: {
        height: {
          type: String,
          required: true
        },
        itemHeight: {
          type: Number,
          required: true
        },
        len: {
          type: Number,
          required: true
        }
      },
      methods:{
        getfixCss(css) {
            return ["moz", "webkit", "ms", "o"]
              .map(item => {
                const arr = css.split(";");
                return arr
                  .map(cs => {
                    return `-${item}-${cs}`;
                  })
                  .join(";");
              })
              .join(";");
          },
      }
}