// import clone from 'rfdc'

function copyBuffer (cur:any) {
    if (cur instanceof Buffer) {
      return Buffer.from(cur)
    }
  
    return new cur.constructor(cur.buffer.slice(), cur.byteOffset, cur.length)
  }
function cloneArray (a:any, fn:any) {
    var keys = Object.keys(a)
    var a2:any = new Array(keys.length)
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i]
      var cur = a[k]
      if (typeof cur !== 'object' || cur === null) {
        a2[k] = cur
      } else if (cur instanceof Date) {
        a2[k] = new Date(cur)
      } else if (ArrayBuffer.isView(cur)) {
        a2[k] = copyBuffer(cur)
      } else {
        a2[k] = fn(cur)
      }
    }
    return a2
  }

function clone <T>(o:T) {
    if (typeof o !== 'object' || o === null) return o
    if (o instanceof Date) return new Date(o)
    if (Array.isArray(o)) return cloneArray(o, clone)
    if (o instanceof Map) return new Map(cloneArray(Array.from(o), clone))
    if (o instanceof Set) return new Set(cloneArray(Array.from(o), clone))
    var o2:any = {}
    for (var k in o) {
      if (Object.hasOwnProperty.call(o, k) === false) continue
      var cur = o[k]
      if (typeof cur !== 'object' || cur === null) {
        o2[k] = cur
      } else if (cur instanceof Date) {
        o2[k] = new Date(cur)
      } else if (cur instanceof Map) {
        o2[k] = new Map(cloneArray(Array.from(cur), clone))
      } else if (cur instanceof Set) {
        o2[k] = new Set(cloneArray(Array.from(cur), clone))
      } else if (ArrayBuffer.isView(cur)) {
        o2[k] = copyBuffer(cur)
      } else {
        o2[k] = clone(cur)
      }
    }
    return o2
  }

// export const arrayClone= (items:any) => items.map((item:any) => Array.isArray(item)?arrayClone(item):item)
export const arrayClone= <T>(items:T):T => clone(items);