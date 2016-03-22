module.exports = {
  name: "2json",
  ns: "xml",
  title: "XML To JSON",
  description: "Converts XML to JSON",
  phrases: {
    active: "Converting XML to JSON"
  },
  ports: {
    input: {
      "in": {
        title: "XML",
        type: "string",
        required: true
      }
    },
    output: {
      out: {
        title: "Object",
        type: "object"
      }
    }
  },
  dependencies: {
    npm: {
      xml2json: require('xml2json')
    }
  },
  fn: function _2json(input, $, output, state, done, cb, on, xml2json) {
    var r = function() {
      output.out = $.write('in', xml2json.toJson(input.in, {
        object: true
      }))
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}