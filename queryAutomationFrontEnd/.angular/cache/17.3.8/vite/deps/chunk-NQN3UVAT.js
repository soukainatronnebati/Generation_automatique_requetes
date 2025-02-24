// node_modules/vis-data/peer/esm/vis-data.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var defineProperty$f = { exports: {} };
var check = function(it) {
  return it && it.Math === Math && it;
};
var global$p = (
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == "object" && self) || check(typeof commonjsGlobal == "object" && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || commonjsGlobal || Function("return this")()
);
var fails$u = function(exec2) {
  try {
    return !!exec2();
  } catch (error) {
    return true;
  }
};
var fails$t = fails$u;
var functionBindNative = !fails$t(function() {
  var test2 = (function() {
  }).bind();
  return typeof test2 != "function" || test2.hasOwnProperty("prototype");
});
var NATIVE_BIND$4 = functionBindNative;
var FunctionPrototype$4 = Function.prototype;
var apply$6 = FunctionPrototype$4.apply;
var call$k = FunctionPrototype$4.call;
var functionApply = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND$4 ? call$k.bind(apply$6) : function() {
  return call$k.apply(apply$6, arguments);
});
var NATIVE_BIND$3 = functionBindNative;
var FunctionPrototype$3 = Function.prototype;
var call$j = FunctionPrototype$3.call;
var uncurryThisWithBind = NATIVE_BIND$3 && FunctionPrototype$3.bind.bind(call$j, call$j);
var functionUncurryThis = NATIVE_BIND$3 ? uncurryThisWithBind : function(fn) {
  return function() {
    return call$j.apply(fn, arguments);
  };
};
var uncurryThis$q = functionUncurryThis;
var toString$9 = uncurryThis$q({}.toString);
var stringSlice$1 = uncurryThis$q("".slice);
var classofRaw$2 = function(it) {
  return stringSlice$1(toString$9(it), 8, -1);
};
var classofRaw$1 = classofRaw$2;
var uncurryThis$p = functionUncurryThis;
var functionUncurryThisClause = function(fn) {
  if (classofRaw$1(fn) === "Function")
    return uncurryThis$p(fn);
};
var documentAll$2 = typeof document == "object" && document.all;
var IS_HTMLDDA = typeof documentAll$2 == "undefined" && documentAll$2 !== void 0;
var documentAll_1 = {
  all: documentAll$2,
  IS_HTMLDDA
};
var $documentAll$1 = documentAll_1;
var documentAll$1 = $documentAll$1.all;
var isCallable$m = $documentAll$1.IS_HTMLDDA ? function(argument) {
  return typeof argument == "function" || argument === documentAll$1;
} : function(argument) {
  return typeof argument == "function";
};
var objectGetOwnPropertyDescriptor = {};
var fails$s = fails$u;
var descriptors = !fails$s(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
});
var NATIVE_BIND$2 = functionBindNative;
var call$i = Function.prototype.call;
var functionCall = NATIVE_BIND$2 ? call$i.bind(call$i) : function() {
  return call$i.apply(call$i, arguments);
};
var objectPropertyIsEnumerable = {};
var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor$7 = Object.getOwnPropertyDescriptor;
var NASHORN_BUG = getOwnPropertyDescriptor$7 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$7(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable$1;
var createPropertyDescriptor$7 = function(bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value
  };
};
var uncurryThis$o = functionUncurryThis;
var fails$r = fails$u;
var classof$f = classofRaw$2;
var $Object$4 = Object;
var split = uncurryThis$o("".split);
var indexedObject = fails$r(function() {
  return !$Object$4("z").propertyIsEnumerable(0);
}) ? function(it) {
  return classof$f(it) === "String" ? split(it, "") : $Object$4(it);
} : $Object$4;
var isNullOrUndefined$6 = function(it) {
  return it === null || it === void 0;
};
var isNullOrUndefined$5 = isNullOrUndefined$6;
var $TypeError$g = TypeError;
var requireObjectCoercible$3 = function(it) {
  if (isNullOrUndefined$5(it))
    throw new $TypeError$g("Can't call method on " + it);
  return it;
};
var IndexedObject$3 = indexedObject;
var requireObjectCoercible$2 = requireObjectCoercible$3;
var toIndexedObject$a = function(it) {
  return IndexedObject$3(requireObjectCoercible$2(it));
};
var isCallable$l = isCallable$m;
var $documentAll = documentAll_1;
var documentAll = $documentAll.all;
var isObject$h = $documentAll.IS_HTMLDDA ? function(it) {
  return typeof it == "object" ? it !== null : isCallable$l(it) || it === documentAll;
} : function(it) {
  return typeof it == "object" ? it !== null : isCallable$l(it);
};
var path$o = {};
var path$n = path$o;
var global$o = global$p;
var isCallable$k = isCallable$m;
var aFunction = function(variable) {
  return isCallable$k(variable) ? variable : void 0;
};
var getBuiltIn$f = function(namespace, method2) {
  return arguments.length < 2 ? aFunction(path$n[namespace]) || aFunction(global$o[namespace]) : path$n[namespace] && path$n[namespace][method2] || global$o[namespace] && global$o[namespace][method2];
};
var uncurryThis$n = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$n({}.isPrototypeOf);
var engineUserAgent = typeof navigator != "undefined" && String(navigator.userAgent) || "";
var global$n = global$p;
var userAgent$5 = engineUserAgent;
var process$3 = global$n.process;
var Deno$1 = global$n.Deno;
var versions = process$3 && process$3.versions || Deno$1 && Deno$1.version;
var v8 = versions && versions.v8;
var match;
var version;
if (v8) {
  match = v8.split(".");
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
if (!version && userAgent$5) {
  match = userAgent$5.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$5.match(/Chrome\/(\d+)/);
    if (match)
      version = +match[1];
  }
}
var engineV8Version = version;
var V8_VERSION$3 = engineV8Version;
var fails$q = fails$u;
var global$m = global$p;
var $String$5 = global$m.String;
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$q(function() {
  var symbol2 = Symbol("symbol detection");
  return !$String$5(symbol2) || !(Object(symbol2) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
});
var NATIVE_SYMBOL$5 = symbolConstructorDetection;
var useSymbolAsUid = NATIVE_SYMBOL$5 && !Symbol.sham && typeof Symbol.iterator == "symbol";
var getBuiltIn$e = getBuiltIn$f;
var isCallable$j = isCallable$m;
var isPrototypeOf$k = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var $Object$3 = Object;
var isSymbol$5 = USE_SYMBOL_AS_UID$1 ? function(it) {
  return typeof it == "symbol";
} : function(it) {
  var $Symbol2 = getBuiltIn$e("Symbol");
  return isCallable$j($Symbol2) && isPrototypeOf$k($Symbol2.prototype, $Object$3(it));
};
var $String$4 = String;
var tryToString$6 = function(argument) {
  try {
    return $String$4(argument);
  } catch (error) {
    return "Object";
  }
};
var isCallable$i = isCallable$m;
var tryToString$5 = tryToString$6;
var $TypeError$f = TypeError;
var aCallable$e = function(argument) {
  if (isCallable$i(argument))
    return argument;
  throw new $TypeError$f(tryToString$5(argument) + " is not a function");
};
var aCallable$d = aCallable$e;
var isNullOrUndefined$4 = isNullOrUndefined$6;
var getMethod$3 = function(V, P) {
  var func = V[P];
  return isNullOrUndefined$4(func) ? void 0 : aCallable$d(func);
};
var call$h = functionCall;
var isCallable$h = isCallable$m;
var isObject$g = isObject$h;
var $TypeError$e = TypeError;
var ordinaryToPrimitive$1 = function(input, pref) {
  var fn, val;
  if (pref === "string" && isCallable$h(fn = input.toString) && !isObject$g(val = call$h(fn, input)))
    return val;
  if (isCallable$h(fn = input.valueOf) && !isObject$g(val = call$h(fn, input)))
    return val;
  if (pref !== "string" && isCallable$h(fn = input.toString) && !isObject$g(val = call$h(fn, input)))
    return val;
  throw new $TypeError$e("Can't convert object to primitive value");
};
var shared$7 = { exports: {} };
var isPure = true;
var global$l = global$p;
var defineProperty$e = Object.defineProperty;
var defineGlobalProperty$1 = function(key, value) {
  try {
    defineProperty$e(global$l, key, { value, configurable: true, writable: true });
  } catch (error) {
    global$l[key] = value;
  }
  return value;
};
var global$k = global$p;
var defineGlobalProperty = defineGlobalProperty$1;
var SHARED = "__core-js_shared__";
var store$3 = global$k[SHARED] || defineGlobalProperty(SHARED, {});
var sharedStore = store$3;
var store$2 = sharedStore;
(shared$7.exports = function(key, value) {
  return store$2[key] || (store$2[key] = value !== void 0 ? value : {});
})("versions", []).push({
  version: "3.33.2",
  mode: "pure",
  copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.33.2/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var sharedExports = shared$7.exports;
var requireObjectCoercible$1 = requireObjectCoercible$3;
var $Object$2 = Object;
var toObject$e = function(argument) {
  return $Object$2(requireObjectCoercible$1(argument));
};
var uncurryThis$m = functionUncurryThis;
var toObject$d = toObject$e;
var hasOwnProperty = uncurryThis$m({}.hasOwnProperty);
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$d(it), key);
};
var uncurryThis$l = functionUncurryThis;
var id$1 = 0;
var postfix = Math.random();
var toString$8 = uncurryThis$l(1 .toString);
var uid$4 = function(key) {
  return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString$8(++id$1 + postfix, 36);
};
var global$j = global$p;
var shared$6 = sharedExports;
var hasOwn$j = hasOwnProperty_1;
var uid$3 = uid$4;
var NATIVE_SYMBOL$4 = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var Symbol$3 = global$j.Symbol;
var WellKnownSymbolsStore$2 = shared$6("wks");
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$3["for"] || Symbol$3 : Symbol$3 && Symbol$3.withoutSetter || uid$3;
var wellKnownSymbol$n = function(name) {
  if (!hasOwn$j(WellKnownSymbolsStore$2, name)) {
    WellKnownSymbolsStore$2[name] = NATIVE_SYMBOL$4 && hasOwn$j(Symbol$3, name) ? Symbol$3[name] : createWellKnownSymbol("Symbol." + name);
  }
  return WellKnownSymbolsStore$2[name];
};
var call$g = functionCall;
var isObject$f = isObject$h;
var isSymbol$4 = isSymbol$5;
var getMethod$2 = getMethod$3;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$m = wellKnownSymbol$n;
var $TypeError$d = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$m("toPrimitive");
var toPrimitive$6 = function(input, pref) {
  if (!isObject$f(input) || isSymbol$4(input))
    return input;
  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === void 0)
      pref = "default";
    result = call$g(exoticToPrim, input, pref);
    if (!isObject$f(result) || isSymbol$4(result))
      return result;
    throw new $TypeError$d("Can't convert object to primitive value");
  }
  if (pref === void 0)
    pref = "number";
  return ordinaryToPrimitive(input, pref);
};
var toPrimitive$5 = toPrimitive$6;
var isSymbol$3 = isSymbol$5;
var toPropertyKey$4 = function(argument) {
  var key = toPrimitive$5(argument, "string");
  return isSymbol$3(key) ? key : key + "";
};
var global$i = global$p;
var isObject$e = isObject$h;
var document$3 = global$i.document;
var EXISTS$1 = isObject$e(document$3) && isObject$e(document$3.createElement);
var documentCreateElement$1 = function(it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};
var DESCRIPTORS$h = descriptors;
var fails$p = fails$u;
var createElement$1 = documentCreateElement$1;
var ie8DomDefine = !DESCRIPTORS$h && !fails$p(function() {
  return Object.defineProperty(createElement$1("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
});
var DESCRIPTORS$g = descriptors;
var call$f = functionCall;
var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable;
var createPropertyDescriptor$6 = createPropertyDescriptor$7;
var toIndexedObject$9 = toIndexedObject$a;
var toPropertyKey$3 = toPropertyKey$4;
var hasOwn$i = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$g ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$9(O);
  P = toPropertyKey$3(P);
  if (IE8_DOM_DEFINE$1)
    try {
      return $getOwnPropertyDescriptor$2(O, P);
    } catch (error) {
    }
  if (hasOwn$i(O, P))
    return createPropertyDescriptor$6(!call$f(propertyIsEnumerableModule$2.f, O, P), O[P]);
};
var fails$o = fails$u;
var isCallable$g = isCallable$m;
var replacement = /#|\.prototype\./;
var isForced$2 = function(feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true : value === NATIVE ? false : isCallable$g(detection) ? fails$o(detection) : !!detection;
};
var normalize = isForced$2.normalize = function(string) {
  return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced$2.data = {};
var NATIVE = isForced$2.NATIVE = "N";
var POLYFILL = isForced$2.POLYFILL = "P";
var isForced_1 = isForced$2;
var uncurryThis$k = functionUncurryThisClause;
var aCallable$c = aCallable$e;
var NATIVE_BIND$1 = functionBindNative;
var bind$i = uncurryThis$k(uncurryThis$k.bind);
var functionBindContext = function(fn, that) {
  aCallable$c(fn);
  return that === void 0 ? fn : NATIVE_BIND$1 ? bind$i(fn, that) : function() {
    return fn.apply(that, arguments);
  };
};
var objectDefineProperty = {};
var DESCRIPTORS$f = descriptors;
var fails$n = fails$u;
var v8PrototypeDefineBug = DESCRIPTORS$f && fails$n(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: false
  }).prototype !== 42;
});
var isObject$d = isObject$h;
var $String$3 = String;
var $TypeError$c = TypeError;
var anObject$d = function(argument) {
  if (isObject$d(argument))
    return argument;
  throw new $TypeError$c($String$3(argument) + " is not an object");
};
var DESCRIPTORS$e = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$c = anObject$d;
var toPropertyKey$2 = toPropertyKey$4;
var $TypeError$b = TypeError;
var $defineProperty$1 = Object.defineProperty;
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE$1 = "configurable";
var WRITABLE = "writable";
objectDefineProperty.f = DESCRIPTORS$e ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$c(O);
  P = toPropertyKey$2(P);
  anObject$c(Attributes);
  if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor$1(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  }
  return $defineProperty$1(O, P, Attributes);
} : $defineProperty$1 : function defineProperty2(O, P, Attributes) {
  anObject$c(O);
  P = toPropertyKey$2(P);
  anObject$c(Attributes);
  if (IE8_DOM_DEFINE)
    try {
      return $defineProperty$1(O, P, Attributes);
    } catch (error) {
    }
  if ("get" in Attributes || "set" in Attributes)
    throw new $TypeError$b("Accessors not supported");
  if ("value" in Attributes)
    O[P] = Attributes.value;
  return O;
};
var DESCRIPTORS$d = descriptors;
var definePropertyModule$4 = objectDefineProperty;
var createPropertyDescriptor$5 = createPropertyDescriptor$7;
var createNonEnumerableProperty$9 = DESCRIPTORS$d ? function(object, key, value) {
  return definePropertyModule$4.f(object, key, createPropertyDescriptor$5(1, value));
} : function(object, key, value) {
  object[key] = value;
  return object;
};
var global$h = global$p;
var apply$5 = functionApply;
var uncurryThis$j = functionUncurryThisClause;
var isCallable$f = isCallable$m;
var getOwnPropertyDescriptor$6 = objectGetOwnPropertyDescriptor.f;
var isForced$1 = isForced_1;
var path$m = path$o;
var bind$h = functionBindContext;
var createNonEnumerableProperty$8 = createNonEnumerableProperty$9;
var hasOwn$h = hasOwnProperty_1;
var wrapConstructor = function(NativeConstructor) {
  var Wrapper = function(a, b, c) {
    if (this instanceof Wrapper) {
      switch (arguments.length) {
        case 0:
          return new NativeConstructor();
        case 1:
          return new NativeConstructor(a);
        case 2:
          return new NativeConstructor(a, b);
      }
      return new NativeConstructor(a, b, c);
    }
    return apply$5(NativeConstructor, this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};
var _export = function(options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;
  var nativeSource = GLOBAL ? global$h : STATIC ? global$h[TARGET] : (global$h[TARGET] || {}).prototype;
  var target = GLOBAL ? path$m : path$m[TARGET] || createNonEnumerableProperty$8(path$m, TARGET, {})[TARGET];
  var targetPrototype = target.prototype;
  var FORCED2, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;
  for (key in source) {
    FORCED2 = isForced$1(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
    USE_NATIVE = !FORCED2 && nativeSource && hasOwn$h(nativeSource, key);
    targetProperty = target[key];
    if (USE_NATIVE)
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor$6(nativeSource, key);
        nativeProperty = descriptor && descriptor.value;
      } else
        nativeProperty = nativeSource[key];
    sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];
    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty)
      continue;
    if (options.bind && USE_NATIVE)
      resultProperty = bind$h(sourceProperty, global$h);
    else if (options.wrap && USE_NATIVE)
      resultProperty = wrapConstructor(sourceProperty);
    else if (PROTO && isCallable$f(sourceProperty))
      resultProperty = uncurryThis$j(sourceProperty);
    else
      resultProperty = sourceProperty;
    if (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty$8(resultProperty, "sham", true);
    }
    createNonEnumerableProperty$8(target, key, resultProperty);
    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + "Prototype";
      if (!hasOwn$h(path$m, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty$8(path$m, VIRTUAL_PROTOTYPE, {});
      }
      createNonEnumerableProperty$8(path$m[VIRTUAL_PROTOTYPE], key, sourceProperty);
      if (options.real && targetPrototype && (FORCED2 || !targetPrototype[key])) {
        createNonEnumerableProperty$8(targetPrototype, key, sourceProperty);
      }
    }
  }
};
var $$P = _export;
var DESCRIPTORS$c = descriptors;
var defineProperty$d = objectDefineProperty.f;
$$P({ target: "Object", stat: true, forced: Object.defineProperty !== defineProperty$d, sham: !DESCRIPTORS$c }, {
  defineProperty: defineProperty$d
});
var path$l = path$o;
var Object$4 = path$l.Object;
var defineProperty$c = defineProperty$f.exports = function defineProperty3(it, key, desc) {
  return Object$4.defineProperty(it, key, desc);
};
if (Object$4.defineProperty.sham)
  defineProperty$c.sham = true;
var definePropertyExports = defineProperty$f.exports;
var parent$18 = definePropertyExports;
var defineProperty$b = parent$18;
var parent$17 = defineProperty$b;
var defineProperty$a = parent$17;
var parent$16 = defineProperty$a;
var defineProperty$9 = parent$16;
var defineProperty$8 = defineProperty$9;
var _Object$defineProperty$1 = getDefaultExportFromCjs(defineProperty$8);
var classof$e = classofRaw$2;
var isArray$e = Array.isArray || function isArray(argument) {
  return classof$e(argument) === "Array";
};
var ceil = Math.ceil;
var floor$1 = Math.floor;
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$1 : ceil)(n);
};
var trunc2 = mathTrunc;
var toIntegerOrInfinity$4 = function(argument) {
  var number = +argument;
  return number !== number || number === 0 ? 0 : trunc2(number);
};
var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;
var min$2 = Math.min;
var toLength$1 = function(argument) {
  return argument > 0 ? min$2(toIntegerOrInfinity$3(argument), 9007199254740991) : 0;
};
var toLength = toLength$1;
var lengthOfArrayLike$d = function(obj) {
  return toLength(obj.length);
};
var $TypeError$a = TypeError;
var MAX_SAFE_INTEGER = 9007199254740991;
var doesNotExceedSafeInteger$4 = function(it) {
  if (it > MAX_SAFE_INTEGER)
    throw $TypeError$a("Maximum allowed index exceeded");
  return it;
};
var toPropertyKey$1 = toPropertyKey$4;
var definePropertyModule$3 = objectDefineProperty;
var createPropertyDescriptor$4 = createPropertyDescriptor$7;
var createProperty$6 = function(object, key, value) {
  var propertyKey = toPropertyKey$1(key);
  if (propertyKey in object)
    definePropertyModule$3.f(object, propertyKey, createPropertyDescriptor$4(0, value));
  else
    object[propertyKey] = value;
};
var wellKnownSymbol$l = wellKnownSymbol$n;
var TO_STRING_TAG$4 = wellKnownSymbol$l("toStringTag");
var test$2 = {};
test$2[TO_STRING_TAG$4] = "z";
var toStringTagSupport = String(test$2) === "[object z]";
var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
var isCallable$e = isCallable$m;
var classofRaw = classofRaw$2;
var wellKnownSymbol$k = wellKnownSymbol$n;
var TO_STRING_TAG$3 = wellKnownSymbol$k("toStringTag");
var $Object$1 = Object;
var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ function() {
  return arguments;
}()) === "Arguments";
var tryGet = function(it, key) {
  try {
    return it[key];
  } catch (error) {
  }
};
var classof$d = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function(it) {
  var O, tag, result;
  return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$3)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable$e(O.callee) ? "Arguments" : result;
};
var uncurryThis$i = functionUncurryThis;
var isCallable$d = isCallable$m;
var store$1 = sharedStore;
var functionToString = uncurryThis$i(Function.toString);
if (!isCallable$d(store$1.inspectSource)) {
  store$1.inspectSource = function(it) {
    return functionToString(it);
  };
}
var inspectSource$2 = store$1.inspectSource;
var uncurryThis$h = functionUncurryThis;
var fails$m = fails$u;
var isCallable$c = isCallable$m;
var classof$c = classof$d;
var getBuiltIn$d = getBuiltIn$f;
var inspectSource$1 = inspectSource$2;
var noop = function() {
};
var empty = [];
var construct$4 = getBuiltIn$d("Reflect", "construct");
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$1 = uncurryThis$h(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$c(argument))
    return false;
  try {
    construct$4(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};
var isConstructorLegacy = function isConstructor2(argument) {
  if (!isCallable$c(argument))
    return false;
  switch (classof$c(argument)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource$1(argument));
  } catch (error) {
    return true;
  }
};
isConstructorLegacy.sham = true;
var isConstructor$4 = !construct$4 || fails$m(function() {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;
var isArray$d = isArray$e;
var isConstructor$3 = isConstructor$4;
var isObject$c = isObject$h;
var wellKnownSymbol$j = wellKnownSymbol$n;
var SPECIES$5 = wellKnownSymbol$j("species");
var $Array$3 = Array;
var arraySpeciesConstructor$1 = function(originalArray) {
  var C;
  if (isArray$d(originalArray)) {
    C = originalArray.constructor;
    if (isConstructor$3(C) && (C === $Array$3 || isArray$d(C.prototype)))
      C = void 0;
    else if (isObject$c(C)) {
      C = C[SPECIES$5];
      if (C === null)
        C = void 0;
    }
  }
  return C === void 0 ? $Array$3 : C;
};
var arraySpeciesConstructor = arraySpeciesConstructor$1;
var arraySpeciesCreate$4 = function(originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};
var fails$l = fails$u;
var wellKnownSymbol$i = wellKnownSymbol$n;
var V8_VERSION$2 = engineV8Version;
var SPECIES$4 = wellKnownSymbol$i("species");
var arrayMethodHasSpeciesSupport$5 = function(METHOD_NAME) {
  return V8_VERSION$2 >= 51 || !fails$l(function() {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES$4] = function() {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};
var $$O = _export;
var fails$k = fails$u;
var isArray$c = isArray$e;
var isObject$b = isObject$h;
var toObject$c = toObject$e;
var lengthOfArrayLike$c = lengthOfArrayLike$d;
var doesNotExceedSafeInteger$3 = doesNotExceedSafeInteger$4;
var createProperty$5 = createProperty$6;
var arraySpeciesCreate$3 = arraySpeciesCreate$4;
var arrayMethodHasSpeciesSupport$4 = arrayMethodHasSpeciesSupport$5;
var wellKnownSymbol$h = wellKnownSymbol$n;
var V8_VERSION$1 = engineV8Version;
var IS_CONCAT_SPREADABLE = wellKnownSymbol$h("isConcatSpreadable");
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$k(function() {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var isConcatSpreadable = function(O) {
  if (!isObject$b(O))
    return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== void 0 ? !!spreadable : isArray$c(O);
};
var FORCED$6 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$4("concat");
$$O({ target: "Array", proto: true, arity: 1, forced: FORCED$6 }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject$c(this);
    var A = arraySpeciesCreate$3(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike$c(E);
        doesNotExceedSafeInteger$3(n + len);
        for (k = 0; k < len; k++, n++)
          if (k in E)
            createProperty$5(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger$3(n + 1);
        createProperty$5(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});
var classof$b = classof$d;
var $String$2 = String;
var toString$7 = function(argument) {
  if (classof$b(argument) === "Symbol")
    throw new TypeError("Cannot convert a Symbol value to a string");
  return $String$2(argument);
};
var objectDefineProperties = {};
var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;
var max$3 = Math.max;
var min$1 = Math.min;
var toAbsoluteIndex$4 = function(index, length) {
  var integer = toIntegerOrInfinity$2(index);
  return integer < 0 ? max$3(integer + length, 0) : min$1(integer, length);
};
var toIndexedObject$8 = toIndexedObject$a;
var toAbsoluteIndex$3 = toAbsoluteIndex$4;
var lengthOfArrayLike$b = lengthOfArrayLike$d;
var createMethod$3 = function(IS_INCLUDES) {
  return function($this, el, fromIndex) {
    var O = toIndexedObject$8($this);
    var length = lengthOfArrayLike$b(O);
    var index = toAbsoluteIndex$3(fromIndex, length);
    var value;
    if (IS_INCLUDES && el !== el)
      while (length > index) {
        value = O[index++];
        if (value !== value)
          return true;
      }
    else
      for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el)
          return IS_INCLUDES || index || 0;
      }
    return !IS_INCLUDES && -1;
  };
};
var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$3(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$3(false)
};
var hiddenKeys$6 = {};
var uncurryThis$g = functionUncurryThis;
var hasOwn$g = hasOwnProperty_1;
var toIndexedObject$7 = toIndexedObject$a;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$5 = hiddenKeys$6;
var push$c = uncurryThis$g([].push);
var objectKeysInternal = function(object, names) {
  var O = toIndexedObject$7(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O)
    !hasOwn$g(hiddenKeys$5, key) && hasOwn$g(O, key) && push$c(result, key);
  while (names.length > i)
    if (hasOwn$g(O, key = names[i++])) {
      ~indexOf(result, key) || push$c(result, key);
    }
  return result;
};
var enumBugKeys$3 = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
];
var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;
var objectKeys$3 = Object.keys || function keys(O) {
  return internalObjectKeys$1(O, enumBugKeys$2);
};
var DESCRIPTORS$b = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$2 = objectDefineProperty;
var anObject$b = anObject$d;
var toIndexedObject$6 = toIndexedObject$a;
var objectKeys$2 = objectKeys$3;
objectDefineProperties.f = DESCRIPTORS$b && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$b(O);
  var props = toIndexedObject$6(Properties);
  var keys4 = objectKeys$2(Properties);
  var length = keys4.length;
  var index = 0;
  var key;
  while (length > index)
    definePropertyModule$2.f(O, key = keys4[index++], props[key]);
  return O;
};
var getBuiltIn$c = getBuiltIn$f;
var html$2 = getBuiltIn$c("document", "documentElement");
var shared$5 = sharedExports;
var uid$2 = uid$4;
var keys$7 = shared$5("keys");
var sharedKey$4 = function(key) {
  return keys$7[key] || (keys$7[key] = uid$2(key));
};
var anObject$a = anObject$d;
var definePropertiesModule$1 = objectDefineProperties;
var enumBugKeys$1 = enumBugKeys$3;
var hiddenKeys$4 = hiddenKeys$6;
var html$1 = html$2;
var documentCreateElement = documentCreateElement$1;
var sharedKey$3 = sharedKey$4;
var GT = ">";
var LT = "<";
var PROTOTYPE$1 = "prototype";
var SCRIPT = "script";
var IE_PROTO$1 = sharedKey$3("IE_PROTO");
var EmptyConstructor = function() {
};
var scriptTag = function(content) {
  return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
};
var NullProtoObjectViaActiveX = function(activeXDocument2) {
  activeXDocument2.write(scriptTag(""));
  activeXDocument2.close();
  var temp = activeXDocument2.parentWindow.Object;
  activeXDocument2 = null;
  return temp;
};
var NullProtoObjectViaIFrame = function() {
  var iframe = documentCreateElement("iframe");
  var JS = "java" + SCRIPT + ":";
  var iframeDocument;
  iframe.style.display = "none";
  html$1.appendChild(iframe);
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag("document.F=Object"));
  iframeDocument.close();
  return iframeDocument.F;
};
var activeXDocument;
var NullProtoObject = function() {
  try {
    activeXDocument = new ActiveXObject("htmlfile");
  } catch (error) {
  }
  NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
  var length = enumBugKeys$1.length;
  while (length--)
    delete NullProtoObject[PROTOTYPE$1][enumBugKeys$1[length]];
  return NullProtoObject();
};
hiddenKeys$4[IE_PROTO$1] = true;
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE$1] = anObject$a(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE$1] = null;
    result[IE_PROTO$1] = O;
  } else
    result = NullProtoObject();
  return Properties === void 0 ? result : definePropertiesModule$1.f(result, Properties);
};
var objectGetOwnPropertyNames = {};
var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys$3 = enumBugKeys.concat("length", "prototype");
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys$3);
};
var objectGetOwnPropertyNamesExternal = {};
var toAbsoluteIndex$2 = toAbsoluteIndex$4;
var lengthOfArrayLike$a = lengthOfArrayLike$d;
var createProperty$4 = createProperty$6;
var $Array$2 = Array;
var max$2 = Math.max;
var arraySliceSimple = function(O, start, end) {
  var length = lengthOfArrayLike$a(O);
  var k = toAbsoluteIndex$2(start, length);
  var fin = toAbsoluteIndex$2(end === void 0 ? length : end, length);
  var result = $Array$2(max$2(fin - k, 0));
  var n = 0;
  for (; k < fin; k++, n++)
    createProperty$4(result, n, O[k]);
  result.length = n;
  return result;
};
var classof$a = classofRaw$2;
var toIndexedObject$5 = toIndexedObject$a;
var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
var arraySlice$6 = arraySliceSimple;
var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
var getWindowNames = function(it) {
  try {
    return $getOwnPropertyNames$1(it);
  } catch (error) {
    return arraySlice$6(windowNames);
  }
};
objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames2(it) {
  return windowNames && classof$a(it) === "Window" ? getWindowNames(it) : $getOwnPropertyNames$1(toIndexedObject$5(it));
};
var objectGetOwnPropertySymbols = {};
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
var createNonEnumerableProperty$7 = createNonEnumerableProperty$9;
var defineBuiltIn$6 = function(target, key, value, options) {
  if (options && options.enumerable)
    target[key] = value;
  else
    createNonEnumerableProperty$7(target, key, value);
  return target;
};
var defineProperty$7 = objectDefineProperty;
var defineBuiltInAccessor$3 = function(target, name, descriptor) {
  return defineProperty$7.f(target, name, descriptor);
};
var wellKnownSymbolWrapped = {};
var wellKnownSymbol$g = wellKnownSymbol$n;
wellKnownSymbolWrapped.f = wellKnownSymbol$g;
var path$k = path$o;
var hasOwn$f = hasOwnProperty_1;
var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
var defineProperty$6 = objectDefineProperty.f;
var wellKnownSymbolDefine = function(NAME) {
  var Symbol2 = path$k.Symbol || (path$k.Symbol = {});
  if (!hasOwn$f(Symbol2, NAME))
    defineProperty$6(Symbol2, NAME, {
      value: wrappedWellKnownSymbolModule$1.f(NAME)
    });
};
var call$e = functionCall;
var getBuiltIn$b = getBuiltIn$f;
var wellKnownSymbol$f = wellKnownSymbol$n;
var defineBuiltIn$5 = defineBuiltIn$6;
var symbolDefineToPrimitive = function() {
  var Symbol2 = getBuiltIn$b("Symbol");
  var SymbolPrototype2 = Symbol2 && Symbol2.prototype;
  var valueOf = SymbolPrototype2 && SymbolPrototype2.valueOf;
  var TO_PRIMITIVE2 = wellKnownSymbol$f("toPrimitive");
  if (SymbolPrototype2 && !SymbolPrototype2[TO_PRIMITIVE2]) {
    defineBuiltIn$5(SymbolPrototype2, TO_PRIMITIVE2, function(hint) {
      return call$e(valueOf, this);
    }, { arity: 1 });
  }
};
var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
var classof$9 = classof$d;
var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
  return "[object " + classof$9(this) + "]";
};
var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var defineProperty$5 = objectDefineProperty.f;
var createNonEnumerableProperty$6 = createNonEnumerableProperty$9;
var hasOwn$e = hasOwnProperty_1;
var toString$6 = objectToString;
var wellKnownSymbol$e = wellKnownSymbol$n;
var TO_STRING_TAG$2 = wellKnownSymbol$e("toStringTag");
var setToStringTag$7 = function(it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!hasOwn$e(target, TO_STRING_TAG$2)) {
      defineProperty$5(target, TO_STRING_TAG$2, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty$6(target, "toString", toString$6);
    }
  }
};
var global$g = global$p;
var isCallable$b = isCallable$m;
var WeakMap$1 = global$g.WeakMap;
var weakMapBasicDetection = isCallable$b(WeakMap$1) && /native code/.test(String(WeakMap$1));
var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$f = global$p;
var isObject$a = isObject$h;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$9;
var hasOwn$d = hasOwnProperty_1;
var shared$4 = sharedStore;
var sharedKey$2 = sharedKey$4;
var hiddenKeys$2 = hiddenKeys$6;
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError$3 = global$f.TypeError;
var WeakMap = global$f.WeakMap;
var set$4;
var get;
var has;
var enforce = function(it) {
  return has(it) ? get(it) : set$4(it, {});
};
var getterFor = function(TYPE) {
  return function(it) {
    var state;
    if (!isObject$a(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError$3("Incompatible receiver, " + TYPE + " required");
    }
    return state;
  };
};
if (NATIVE_WEAK_MAP || shared$4.state) {
  store = shared$4.state || (shared$4.state = new WeakMap());
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  set$4 = function(it, metadata) {
    if (store.has(it))
      throw new TypeError$3(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function(it) {
    return store.get(it) || {};
  };
  has = function(it) {
    return store.has(it);
  };
} else {
  STATE = sharedKey$2("state");
  hiddenKeys$2[STATE] = true;
  set$4 = function(it, metadata) {
    if (hasOwn$d(it, STATE))
      throw new TypeError$3(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$5(it, STATE, metadata);
    return metadata;
  };
  get = function(it) {
    return hasOwn$d(it, STATE) ? it[STATE] : {};
  };
  has = function(it) {
    return hasOwn$d(it, STATE);
  };
}
var store;
var STATE;
var internalState = {
  set: set$4,
  get,
  has,
  enforce,
  getterFor
};
var bind$g = functionBindContext;
var uncurryThis$f = functionUncurryThis;
var IndexedObject$2 = indexedObject;
var toObject$b = toObject$e;
var lengthOfArrayLike$9 = lengthOfArrayLike$d;
var arraySpeciesCreate$2 = arraySpeciesCreate$4;
var push$b = uncurryThis$f([].push);
var createMethod$2 = function(TYPE) {
  var IS_MAP = TYPE === 1;
  var IS_FILTER = TYPE === 2;
  var IS_SOME = TYPE === 3;
  var IS_EVERY = TYPE === 4;
  var IS_FIND_INDEX = TYPE === 6;
  var IS_FILTER_REJECT = TYPE === 7;
  var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
  return function($this, callbackfn, that, specificCreate) {
    var O = toObject$b($this);
    var self2 = IndexedObject$2(O);
    var boundFunction = bind$g(callbackfn, that);
    var length = lengthOfArrayLike$9(self2);
    var index = 0;
    var create5 = specificCreate || arraySpeciesCreate$2;
    var target = IS_MAP ? create5($this, length) : IS_FILTER || IS_FILTER_REJECT ? create5($this, 0) : void 0;
    var value, result;
    for (; length > index; index++)
      if (NO_HOLES || index in self2) {
        value = self2[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP)
            target[index] = result;
          else if (result)
            switch (TYPE) {
              case 3:
                return true;
              case 5:
                return value;
              case 6:
                return index;
              case 2:
                push$b(target, value);
            }
          else
            switch (TYPE) {
              case 4:
                return false;
              case 7:
                push$b(target, value);
            }
        }
      }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};
var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$2(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod$2(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod$2(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod$2(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod$2(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod$2(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$2(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod$2(7)
};
var $$N = _export;
var global$e = global$p;
var call$d = functionCall;
var uncurryThis$e = functionUncurryThis;
var DESCRIPTORS$a = descriptors;
var NATIVE_SYMBOL$3 = symbolConstructorDetection;
var fails$j = fails$u;
var hasOwn$c = hasOwnProperty_1;
var isPrototypeOf$j = objectIsPrototypeOf;
var anObject$9 = anObject$d;
var toIndexedObject$4 = toIndexedObject$a;
var toPropertyKey = toPropertyKey$4;
var $toString = toString$7;
var createPropertyDescriptor$3 = createPropertyDescriptor$7;
var nativeObjectCreate = objectCreate;
var objectKeys$1 = objectKeys$3;
var getOwnPropertyNamesModule$2 = objectGetOwnPropertyNames;
var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
var getOwnPropertySymbolsModule$3 = objectGetOwnPropertySymbols;
var getOwnPropertyDescriptorModule$2 = objectGetOwnPropertyDescriptor;
var definePropertyModule$1 = objectDefineProperty;
var definePropertiesModule = objectDefineProperties;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var defineBuiltIn$4 = defineBuiltIn$6;
var defineBuiltInAccessor$2 = defineBuiltInAccessor$3;
var shared$3 = sharedExports;
var sharedKey$1 = sharedKey$4;
var hiddenKeys$1 = hiddenKeys$6;
var uid$1 = uid$4;
var wellKnownSymbol$d = wellKnownSymbol$n;
var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
var defineWellKnownSymbol$l = wellKnownSymbolDefine;
var defineSymbolToPrimitive$1 = symbolDefineToPrimitive;
var setToStringTag$6 = setToStringTag$7;
var InternalStateModule$5 = internalState;
var $forEach$1 = arrayIteration.forEach;
var HIDDEN = sharedKey$1("hidden");
var SYMBOL = "Symbol";
var PROTOTYPE = "prototype";
var setInternalState$5 = InternalStateModule$5.set;
var getInternalState$2 = InternalStateModule$5.getterFor(SYMBOL);
var ObjectPrototype$2 = Object[PROTOTYPE];
var $Symbol = global$e.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var RangeError = global$e.RangeError;
var TypeError$2 = global$e.TypeError;
var QObject = global$e.QObject;
var nativeGetOwnPropertyDescriptor$1 = getOwnPropertyDescriptorModule$2.f;
var nativeDefineProperty = definePropertyModule$1.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
var push$a = uncurryThis$e([].push);
var AllSymbols = shared$3("symbols");
var ObjectPrototypeSymbols = shared$3("op-symbols");
var WellKnownSymbolsStore$1 = shared$3("wks");
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
var fallbackDefineProperty = function(O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype$2, P);
  if (ObjectPrototypeDescriptor)
    delete ObjectPrototype$2[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype$2) {
    nativeDefineProperty(ObjectPrototype$2, P, ObjectPrototypeDescriptor);
  }
};
var setSymbolDescriptor = DESCRIPTORS$a && fails$j(function() {
  return nativeObjectCreate(nativeDefineProperty({}, "a", {
    get: function() {
      return nativeDefineProperty(this, "a", { value: 7 }).a;
    }
  })).a !== 7;
}) ? fallbackDefineProperty : nativeDefineProperty;
var wrap = function(tag, description) {
  var symbol2 = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState$5(symbol2, {
    type: SYMBOL,
    tag,
    description
  });
  if (!DESCRIPTORS$a)
    symbol2.description = description;
  return symbol2;
};
var $defineProperty = function defineProperty4(O, P, Attributes) {
  if (O === ObjectPrototype$2)
    $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject$9(O);
  var key = toPropertyKey(P);
  anObject$9(Attributes);
  if (hasOwn$c(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn$c(O, HIDDEN))
        nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$3(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn$c(O, HIDDEN) && O[HIDDEN][key])
        O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor$3(0, false) });
    }
    return setSymbolDescriptor(O, key, Attributes);
  }
  return nativeDefineProperty(O, key, Attributes);
};
var $defineProperties = function defineProperties2(O, Properties) {
  anObject$9(O);
  var properties = toIndexedObject$4(Properties);
  var keys4 = objectKeys$1(properties).concat($getOwnPropertySymbols(properties));
  $forEach$1(keys4, function(key) {
    if (!DESCRIPTORS$a || call$d($propertyIsEnumerable, properties, key))
      $defineProperty(O, key, properties[key]);
  });
  return O;
};
var $create = function create2(O, Properties) {
  return Properties === void 0 ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};
var $propertyIsEnumerable = function propertyIsEnumerable2(V) {
  var P = toPropertyKey(V);
  var enumerable = call$d(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype$2 && hasOwn$c(AllSymbols, P) && !hasOwn$c(ObjectPrototypeSymbols, P))
    return false;
  return enumerable || !hasOwn$c(this, P) || !hasOwn$c(AllSymbols, P) || hasOwn$c(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor2(O, P) {
  var it = toIndexedObject$4(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype$2 && hasOwn$c(AllSymbols, key) && !hasOwn$c(ObjectPrototypeSymbols, key))
    return;
  var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);
  if (descriptor && hasOwn$c(AllSymbols, key) && !(hasOwn$c(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};
var $getOwnPropertyNames = function getOwnPropertyNames3(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject$4(O));
  var result = [];
  $forEach$1(names, function(key) {
    if (!hasOwn$c(AllSymbols, key) && !hasOwn$c(hiddenKeys$1, key))
      push$a(result, key);
  });
  return result;
};
var $getOwnPropertySymbols = function(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$2;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$4(O));
  var result = [];
  $forEach$1(names, function(key) {
    if (hasOwn$c(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$c(ObjectPrototype$2, key))) {
      push$a(result, AllSymbols[key]);
    }
  });
  return result;
};
if (!NATIVE_SYMBOL$3) {
  $Symbol = function Symbol2() {
    if (isPrototypeOf$j(SymbolPrototype, this))
      throw new TypeError$2("Symbol is not a constructor");
    var description = !arguments.length || arguments[0] === void 0 ? void 0 : $toString(arguments[0]);
    var tag = uid$1(description);
    var setter = function(value) {
      var $this = this === void 0 ? global$e : this;
      if ($this === ObjectPrototype$2)
        call$d(setter, ObjectPrototypeSymbols, value);
      if (hasOwn$c($this, HIDDEN) && hasOwn$c($this[HIDDEN], tag))
        $this[HIDDEN][tag] = false;
      var descriptor = createPropertyDescriptor$3(1, value);
      try {
        setSymbolDescriptor($this, tag, descriptor);
      } catch (error) {
        if (!(error instanceof RangeError))
          throw error;
        fallbackDefineProperty($this, tag, descriptor);
      }
    };
    if (DESCRIPTORS$a && USE_SETTER)
      setSymbolDescriptor(ObjectPrototype$2, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };
  SymbolPrototype = $Symbol[PROTOTYPE];
  defineBuiltIn$4(SymbolPrototype, "toString", function toString3() {
    return getInternalState$2(this).tag;
  });
  defineBuiltIn$4($Symbol, "withoutSetter", function(description) {
    return wrap(uid$1(description), description);
  });
  propertyIsEnumerableModule$1.f = $propertyIsEnumerable;
  definePropertyModule$1.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule$2.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule$2.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule$3.f = $getOwnPropertySymbols;
  wrappedWellKnownSymbolModule.f = function(name) {
    return wrap(wellKnownSymbol$d(name), name);
  };
  if (DESCRIPTORS$a) {
    defineBuiltInAccessor$2(SymbolPrototype, "description", {
      configurable: true,
      get: function description() {
        return getInternalState$2(this).description;
      }
    });
  }
}
$$N({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL$3, sham: !NATIVE_SYMBOL$3 }, {
  Symbol: $Symbol
});
$forEach$1(objectKeys$1(WellKnownSymbolsStore$1), function(name) {
  defineWellKnownSymbol$l(name);
});
$$N({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL$3 }, {
  useSetter: function() {
    USE_SETTER = true;
  },
  useSimple: function() {
    USE_SETTER = false;
  }
});
$$N({ target: "Object", stat: true, forced: !NATIVE_SYMBOL$3, sham: !DESCRIPTORS$a }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});
$$N({ target: "Object", stat: true, forced: !NATIVE_SYMBOL$3 }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames
});
defineSymbolToPrimitive$1();
setToStringTag$6($Symbol, SYMBOL);
hiddenKeys$1[HIDDEN] = true;
var NATIVE_SYMBOL$2 = symbolConstructorDetection;
var symbolRegistryDetection = NATIVE_SYMBOL$2 && !!Symbol["for"] && !!Symbol.keyFor;
var $$M = _export;
var getBuiltIn$a = getBuiltIn$f;
var hasOwn$b = hasOwnProperty_1;
var toString$5 = toString$7;
var shared$2 = sharedExports;
var NATIVE_SYMBOL_REGISTRY$1 = symbolRegistryDetection;
var StringToSymbolRegistry = shared$2("string-to-symbol-registry");
var SymbolToStringRegistry$1 = shared$2("symbol-to-string-registry");
$$M({ target: "Symbol", stat: true, forced: !NATIVE_SYMBOL_REGISTRY$1 }, {
  "for": function(key) {
    var string = toString$5(key);
    if (hasOwn$b(StringToSymbolRegistry, string))
      return StringToSymbolRegistry[string];
    var symbol2 = getBuiltIn$a("Symbol")(string);
    StringToSymbolRegistry[string] = symbol2;
    SymbolToStringRegistry$1[symbol2] = string;
    return symbol2;
  }
});
var $$L = _export;
var hasOwn$a = hasOwnProperty_1;
var isSymbol$2 = isSymbol$5;
var tryToString$4 = tryToString$6;
var shared$1 = sharedExports;
var NATIVE_SYMBOL_REGISTRY = symbolRegistryDetection;
var SymbolToStringRegistry = shared$1("symbol-to-string-registry");
$$L({ target: "Symbol", stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  keyFor: function keyFor(sym) {
    if (!isSymbol$2(sym))
      throw new TypeError(tryToString$4(sym) + " is not a symbol");
    if (hasOwn$a(SymbolToStringRegistry, sym))
      return SymbolToStringRegistry[sym];
  }
});
var uncurryThis$d = functionUncurryThis;
var arraySlice$5 = uncurryThis$d([].slice);
var uncurryThis$c = functionUncurryThis;
var isArray$b = isArray$e;
var isCallable$a = isCallable$m;
var classof$8 = classofRaw$2;
var toString$4 = toString$7;
var push$9 = uncurryThis$c([].push);
var getJsonReplacerFunction = function(replacer) {
  if (isCallable$a(replacer))
    return replacer;
  if (!isArray$b(replacer))
    return;
  var rawLength = replacer.length;
  var keys4 = [];
  for (var i = 0; i < rawLength; i++) {
    var element = replacer[i];
    if (typeof element == "string")
      push$9(keys4, element);
    else if (typeof element == "number" || classof$8(element) === "Number" || classof$8(element) === "String")
      push$9(keys4, toString$4(element));
  }
  var keysLength = keys4.length;
  var root = true;
  return function(key, value) {
    if (root) {
      root = false;
      return value;
    }
    if (isArray$b(this))
      return value;
    for (var j = 0; j < keysLength; j++)
      if (keys4[j] === key)
        return value;
  };
};
var $$K = _export;
var getBuiltIn$9 = getBuiltIn$f;
var apply$4 = functionApply;
var call$c = functionCall;
var uncurryThis$b = functionUncurryThis;
var fails$i = fails$u;
var isCallable$9 = isCallable$m;
var isSymbol$1 = isSymbol$5;
var arraySlice$4 = arraySlice$5;
var getReplacerFunction = getJsonReplacerFunction;
var NATIVE_SYMBOL$1 = symbolConstructorDetection;
var $String$1 = String;
var $stringify = getBuiltIn$9("JSON", "stringify");
var exec = uncurryThis$b(/./.exec);
var charAt$2 = uncurryThis$b("".charAt);
var charCodeAt$1 = uncurryThis$b("".charCodeAt);
var replace$1 = uncurryThis$b("".replace);
var numberToString = uncurryThis$b(1 .toString);
var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;
var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$1 || fails$i(function() {
  var symbol2 = getBuiltIn$9("Symbol")("stringify detection");
  return $stringify([symbol2]) !== "[null]" || $stringify({ a: symbol2 }) !== "{}" || $stringify(Object(symbol2)) !== "{}";
});
var ILL_FORMED_UNICODE = fails$i(function() {
  return $stringify("\uDF06\uD834") !== '"\\udf06\\ud834"' || $stringify("\uDEAD") !== '"\\udead"';
});
var stringifyWithSymbolsFix = function(it, replacer) {
  var args = arraySlice$4(arguments);
  var $replacer = getReplacerFunction(replacer);
  if (!isCallable$9($replacer) && (it === void 0 || isSymbol$1(it)))
    return;
  args[1] = function(key, value) {
    if (isCallable$9($replacer))
      value = call$c($replacer, this, $String$1(key), value);
    if (!isSymbol$1(value))
      return value;
  };
  return apply$4($stringify, null, args);
};
var fixIllFormed = function(match2, offset, string) {
  var prev = charAt$2(string, offset - 1);
  var next2 = charAt$2(string, offset + 1);
  if (exec(low, match2) && !exec(hi, next2) || exec(hi, match2) && !exec(low, prev)) {
    return "\\u" + numberToString(charCodeAt$1(match2, 0), 16);
  }
  return match2;
};
if ($stringify) {
  $$K({ target: "JSON", stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify3(it, replacer, space) {
      var args = arraySlice$4(arguments);
      var result = apply$4(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == "string" ? replace$1(result, tester, fixIllFormed) : result;
    }
  });
}
var $$J = _export;
var NATIVE_SYMBOL = symbolConstructorDetection;
var fails$h = fails$u;
var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
var toObject$a = toObject$e;
var FORCED$5 = !NATIVE_SYMBOL || fails$h(function() {
  getOwnPropertySymbolsModule$2.f(1);
});
$$J({ target: "Object", stat: true, forced: FORCED$5 }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    var $getOwnPropertySymbols2 = getOwnPropertySymbolsModule$2.f;
    return $getOwnPropertySymbols2 ? $getOwnPropertySymbols2(toObject$a(it)) : [];
  }
});
var defineWellKnownSymbol$k = wellKnownSymbolDefine;
defineWellKnownSymbol$k("asyncIterator");
var defineWellKnownSymbol$j = wellKnownSymbolDefine;
defineWellKnownSymbol$j("hasInstance");
var defineWellKnownSymbol$i = wellKnownSymbolDefine;
defineWellKnownSymbol$i("isConcatSpreadable");
var defineWellKnownSymbol$h = wellKnownSymbolDefine;
defineWellKnownSymbol$h("iterator");
var defineWellKnownSymbol$g = wellKnownSymbolDefine;
defineWellKnownSymbol$g("match");
var defineWellKnownSymbol$f = wellKnownSymbolDefine;
defineWellKnownSymbol$f("matchAll");
var defineWellKnownSymbol$e = wellKnownSymbolDefine;
defineWellKnownSymbol$e("replace");
var defineWellKnownSymbol$d = wellKnownSymbolDefine;
defineWellKnownSymbol$d("search");
var defineWellKnownSymbol$c = wellKnownSymbolDefine;
defineWellKnownSymbol$c("species");
var defineWellKnownSymbol$b = wellKnownSymbolDefine;
defineWellKnownSymbol$b("split");
var defineWellKnownSymbol$a = wellKnownSymbolDefine;
var defineSymbolToPrimitive = symbolDefineToPrimitive;
defineWellKnownSymbol$a("toPrimitive");
defineSymbolToPrimitive();
var getBuiltIn$8 = getBuiltIn$f;
var defineWellKnownSymbol$9 = wellKnownSymbolDefine;
var setToStringTag$5 = setToStringTag$7;
defineWellKnownSymbol$9("toStringTag");
setToStringTag$5(getBuiltIn$8("Symbol"), "Symbol");
var defineWellKnownSymbol$8 = wellKnownSymbolDefine;
defineWellKnownSymbol$8("unscopables");
var global$d = global$p;
var setToStringTag$4 = setToStringTag$7;
setToStringTag$4(global$d.JSON, "JSON", true);
var path$j = path$o;
var symbol$5 = path$j.Symbol;
var iterators = {};
var DESCRIPTORS$9 = descriptors;
var hasOwn$9 = hasOwnProperty_1;
var FunctionPrototype$2 = Function.prototype;
var getDescriptor = DESCRIPTORS$9 && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$9(FunctionPrototype$2, "name");
var PROPER = EXISTS && (function something() {
}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$9 || DESCRIPTORS$9 && getDescriptor(FunctionPrototype$2, "name").configurable);
var functionName = {
  EXISTS,
  PROPER,
  CONFIGURABLE
};
var fails$g = fails$u;
var correctPrototypeGetter = !fails$g(function() {
  function F() {
  }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});
var hasOwn$8 = hasOwnProperty_1;
var isCallable$8 = isCallable$m;
var toObject$9 = toObject$e;
var sharedKey = sharedKey$4;
var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;
var IE_PROTO = sharedKey("IE_PROTO");
var $Object = Object;
var ObjectPrototype$1 = $Object.prototype;
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER$1 ? $Object.getPrototypeOf : function(O) {
  var object = toObject$9(O);
  if (hasOwn$8(object, IE_PROTO))
    return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$8(constructor) && object instanceof constructor) {
    return constructor.prototype;
  }
  return object instanceof $Object ? ObjectPrototype$1 : null;
};
var fails$f = fails$u;
var isCallable$7 = isCallable$m;
var isObject$9 = isObject$h;
var create$b = objectCreate;
var getPrototypeOf$7 = objectGetPrototypeOf;
var defineBuiltIn$3 = defineBuiltIn$6;
var wellKnownSymbol$c = wellKnownSymbol$n;
var ITERATOR$4 = wellKnownSymbol$c("iterator");
var BUGGY_SAFARI_ITERATORS$1 = false;
var IteratorPrototype$1;
var PrototypeOfArrayIteratorPrototype;
var arrayIterator;
if ([].keys) {
  arrayIterator = [].keys();
  if (!("next" in arrayIterator))
    BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$7(getPrototypeOf$7(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
      IteratorPrototype$1 = PrototypeOfArrayIteratorPrototype;
  }
}
var NEW_ITERATOR_PROTOTYPE = !isObject$9(IteratorPrototype$1) || fails$f(function() {
  var test2 = {};
  return IteratorPrototype$1[ITERATOR$4].call(test2) !== test2;
});
if (NEW_ITERATOR_PROTOTYPE)
  IteratorPrototype$1 = {};
else
  IteratorPrototype$1 = create$b(IteratorPrototype$1);
if (!isCallable$7(IteratorPrototype$1[ITERATOR$4])) {
  defineBuiltIn$3(IteratorPrototype$1, ITERATOR$4, function() {
    return this;
  });
}
var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$1,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};
var IteratorPrototype = iteratorsCore.IteratorPrototype;
var create$a = objectCreate;
var createPropertyDescriptor$2 = createPropertyDescriptor$7;
var setToStringTag$3 = setToStringTag$7;
var Iterators$5 = iterators;
var returnThis$1 = function() {
  return this;
};
var iteratorCreateConstructor = function(IteratorConstructor, NAME, next2, ENUMERABLE_NEXT) {
  var TO_STRING_TAG2 = NAME + " Iterator";
  IteratorConstructor.prototype = create$a(IteratorPrototype, { next: createPropertyDescriptor$2(+!ENUMERABLE_NEXT, next2) });
  setToStringTag$3(IteratorConstructor, TO_STRING_TAG2, false, true);
  Iterators$5[TO_STRING_TAG2] = returnThis$1;
  return IteratorConstructor;
};
var uncurryThis$a = functionUncurryThis;
var aCallable$b = aCallable$e;
var functionUncurryThisAccessor = function(object, key, method2) {
  try {
    return uncurryThis$a(aCallable$b(Object.getOwnPropertyDescriptor(object, key)[method2]));
  } catch (error) {
  }
};
var isCallable$6 = isCallable$m;
var $String = String;
var $TypeError$9 = TypeError;
var aPossiblePrototype$1 = function(argument) {
  if (typeof argument == "object" || isCallable$6(argument))
    return argument;
  throw new $TypeError$9("Can't set " + $String(argument) + " as a prototype");
};
var uncurryThisAccessor = functionUncurryThisAccessor;
var anObject$8 = anObject$d;
var aPossiblePrototype = aPossiblePrototype$1;
var objectSetPrototypeOf = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var CORRECT_SETTER = false;
  var test2 = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
    setter(test2, []);
    CORRECT_SETTER = test2 instanceof Array;
  } catch (error) {
  }
  return function setPrototypeOf2(O, proto) {
    anObject$8(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER)
      setter(O, proto);
    else
      O.__proto__ = proto;
    return O;
  };
}() : void 0);
var $$I = _export;
var call$b = functionCall;
var FunctionName = functionName;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf$6 = objectGetPrototypeOf;
var setToStringTag$2 = setToStringTag$7;
var defineBuiltIn$2 = defineBuiltIn$6;
var wellKnownSymbol$b = wellKnownSymbol$n;
var Iterators$4 = iterators;
var IteratorsCore = iteratorsCore;
var PROPER_FUNCTION_NAME = FunctionName.PROPER;
FunctionName.CONFIGURABLE;
IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$3 = wellKnownSymbol$b("iterator");
var KEYS = "keys";
var VALUES = "values";
var ENTRIES = "entries";
var returnThis = function() {
  return this;
};
var iteratorDefine = function(Iterable, NAME, IteratorConstructor, next2, DEFAULT, IS_SET, FORCED2) {
  createIteratorConstructor(IteratorConstructor, NAME, next2);
  var getIterationMethod = function(KIND) {
    if (KIND === DEFAULT && defaultIterator)
      return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype)
      return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS:
        return function keys4() {
          return new IteratorConstructor(this, KIND);
        };
      case VALUES:
        return function values2() {
          return new IteratorConstructor(this, KIND);
        };
      case ENTRIES:
        return function entries2() {
          return new IteratorConstructor(this, KIND);
        };
    }
    return function() {
      return new IteratorConstructor(this);
    };
  };
  var TO_STRING_TAG2 = NAME + " Iterator";
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$3] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME === "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf$6(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      setToStringTag$2(CurrentIteratorPrototype, TO_STRING_TAG2, true, true);
      Iterators$4[TO_STRING_TAG2] = returnThis;
    }
  }
  if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values2() {
        return call$b(nativeIterator, this);
      };
    }
  }
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED2)
      for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          defineBuiltIn$2(IterablePrototype, KEY, methods[KEY]);
        }
      }
    else
      $$I({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }
  if (FORCED2 && IterablePrototype[ITERATOR$3] !== defaultIterator) {
    defineBuiltIn$2(IterablePrototype, ITERATOR$3, defaultIterator, { name: DEFAULT });
  }
  Iterators$4[NAME] = defaultIterator;
  return methods;
};
var createIterResultObject$3 = function(value, done) {
  return { value, done };
};
var toIndexedObject$3 = toIndexedObject$a;
var Iterators$3 = iterators;
var InternalStateModule$4 = internalState;
objectDefineProperty.f;
var defineIterator$2 = iteratorDefine;
var createIterResultObject$2 = createIterResultObject$3;
var ARRAY_ITERATOR = "Array Iterator";
var setInternalState$4 = InternalStateModule$4.set;
var getInternalState$1 = InternalStateModule$4.getterFor(ARRAY_ITERATOR);
defineIterator$2(Array, "Array", function(iterated, kind) {
  setInternalState$4(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject$3(iterated),
    // target
    index: 0,
    // next index
    kind
    // kind
  });
}, function() {
  var state = getInternalState$1(this);
  var target = state.target;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = void 0;
    return createIterResultObject$2(void 0, true);
  }
  switch (state.kind) {
    case "keys":
      return createIterResultObject$2(index, false);
    case "values":
      return createIterResultObject$2(target[index], false);
  }
  return createIterResultObject$2([index, target[index]], false);
}, "values");
Iterators$3.Arguments = Iterators$3.Array;
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};
var DOMIterables$4 = domIterables;
var global$c = global$p;
var classof$7 = classof$d;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$9;
var Iterators$2 = iterators;
var wellKnownSymbol$a = wellKnownSymbol$n;
var TO_STRING_TAG$1 = wellKnownSymbol$a("toStringTag");
for (COLLECTION_NAME in DOMIterables$4) {
  Collection = global$c[COLLECTION_NAME];
  CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && classof$7(CollectionPrototype) !== TO_STRING_TAG$1) {
    createNonEnumerableProperty$4(CollectionPrototype, TO_STRING_TAG$1, COLLECTION_NAME);
  }
  Iterators$2[COLLECTION_NAME] = Iterators$2.Array;
}
var Collection;
var CollectionPrototype;
var COLLECTION_NAME;
var parent$15 = symbol$5;
var symbol$4 = parent$15;
var wellKnownSymbol$9 = wellKnownSymbol$n;
var defineProperty$4 = objectDefineProperty.f;
var METADATA$1 = wellKnownSymbol$9("metadata");
var FunctionPrototype$1 = Function.prototype;
if (FunctionPrototype$1[METADATA$1] === void 0) {
  defineProperty$4(FunctionPrototype$1, METADATA$1, {
    value: null
  });
}
var defineWellKnownSymbol$7 = wellKnownSymbolDefine;
defineWellKnownSymbol$7("asyncDispose");
var defineWellKnownSymbol$6 = wellKnownSymbolDefine;
defineWellKnownSymbol$6("dispose");
var defineWellKnownSymbol$5 = wellKnownSymbolDefine;
defineWellKnownSymbol$5("metadata");
var parent$14 = symbol$4;
var symbol$3 = parent$14;
var getBuiltIn$7 = getBuiltIn$f;
var uncurryThis$9 = functionUncurryThis;
var Symbol$2 = getBuiltIn$7("Symbol");
var keyFor2 = Symbol$2.keyFor;
var thisSymbolValue$1 = uncurryThis$9(Symbol$2.prototype.valueOf);
var symbolIsRegistered = Symbol$2.isRegisteredSymbol || function isRegisteredSymbol(value) {
  try {
    return keyFor2(thisSymbolValue$1(value)) !== void 0;
  } catch (error) {
    return false;
  }
};
var $$H = _export;
var isRegisteredSymbol$1 = symbolIsRegistered;
$$H({ target: "Symbol", stat: true }, {
  isRegisteredSymbol: isRegisteredSymbol$1
});
var shared = sharedExports;
var getBuiltIn$6 = getBuiltIn$f;
var uncurryThis$8 = functionUncurryThis;
var isSymbol = isSymbol$5;
var wellKnownSymbol$8 = wellKnownSymbol$n;
var Symbol$1 = getBuiltIn$6("Symbol");
var $isWellKnownSymbol = Symbol$1.isWellKnownSymbol;
var getOwnPropertyNames4 = getBuiltIn$6("Object", "getOwnPropertyNames");
var thisSymbolValue = uncurryThis$8(Symbol$1.prototype.valueOf);
var WellKnownSymbolsStore = shared("wks");
for (i = 0, symbolKeys = getOwnPropertyNames4(Symbol$1), symbolKeysLength = symbolKeys.length; i < symbolKeysLength; i++) {
  try {
    symbolKey = symbolKeys[i];
    if (isSymbol(Symbol$1[symbolKey]))
      wellKnownSymbol$8(symbolKey);
  } catch (error) {
  }
}
var symbolKey;
var i;
var symbolKeys;
var symbolKeysLength;
var symbolIsWellKnown = function isWellKnownSymbol(value) {
  if ($isWellKnownSymbol && $isWellKnownSymbol(value))
    return true;
  try {
    var symbol2 = thisSymbolValue(value);
    for (var j = 0, keys4 = getOwnPropertyNames4(WellKnownSymbolsStore), keysLength = keys4.length; j < keysLength; j++) {
      if (WellKnownSymbolsStore[keys4[j]] == symbol2)
        return true;
    }
  } catch (error) {
  }
  return false;
};
var $$G = _export;
var isWellKnownSymbol$1 = symbolIsWellKnown;
$$G({ target: "Symbol", stat: true, forced: true }, {
  isWellKnownSymbol: isWellKnownSymbol$1
});
var defineWellKnownSymbol$4 = wellKnownSymbolDefine;
defineWellKnownSymbol$4("matcher");
var defineWellKnownSymbol$3 = wellKnownSymbolDefine;
defineWellKnownSymbol$3("observable");
var $$F = _export;
var isRegisteredSymbol2 = symbolIsRegistered;
$$F({ target: "Symbol", stat: true, name: "isRegisteredSymbol" }, {
  isRegistered: isRegisteredSymbol2
});
var $$E = _export;
var isWellKnownSymbol2 = symbolIsWellKnown;
$$E({ target: "Symbol", stat: true, name: "isWellKnownSymbol", forced: true }, {
  isWellKnown: isWellKnownSymbol2
});
var defineWellKnownSymbol$2 = wellKnownSymbolDefine;
defineWellKnownSymbol$2("metadataKey");
var defineWellKnownSymbol$1 = wellKnownSymbolDefine;
defineWellKnownSymbol$1("patternMatch");
var defineWellKnownSymbol = wellKnownSymbolDefine;
defineWellKnownSymbol("replaceAll");
var parent$13 = symbol$3;
var symbol$2 = parent$13;
var symbol$1 = symbol$2;
var _Symbol$1 = getDefaultExportFromCjs(symbol$1);
var uncurryThis$7 = functionUncurryThis;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
var toString$3 = toString$7;
var requireObjectCoercible = requireObjectCoercible$3;
var charAt$1 = uncurryThis$7("".charAt);
var charCodeAt = uncurryThis$7("".charCodeAt);
var stringSlice = uncurryThis$7("".slice);
var createMethod$1 = function(CONVERT_TO_STRING) {
  return function($this, pos) {
    var S = toString$3(requireObjectCoercible($this));
    var position = toIntegerOrInfinity$1(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size)
      return CONVERT_TO_STRING ? "" : void 0;
    first = charCodeAt(S, position);
    return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt$1(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
  };
};
var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$1(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$1(true)
};
var charAt = stringMultibyte.charAt;
var toString$2 = toString$7;
var InternalStateModule$3 = internalState;
var defineIterator$1 = iteratorDefine;
var createIterResultObject$1 = createIterResultObject$3;
var STRING_ITERATOR = "String Iterator";
var setInternalState$3 = InternalStateModule$3.set;
var getInternalState = InternalStateModule$3.getterFor(STRING_ITERATOR);
defineIterator$1(String, "String", function(iterated) {
  setInternalState$3(this, {
    type: STRING_ITERATOR,
    string: toString$2(iterated),
    index: 0
  });
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length)
    return createIterResultObject$1(void 0, true);
  point = charAt(string, index);
  state.index += point.length;
  return createIterResultObject$1(point, false);
});
var WrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
var iterator$5 = WrappedWellKnownSymbolModule$1.f("iterator");
var parent$12 = iterator$5;
var iterator$4 = parent$12;
var parent$11 = iterator$4;
var iterator$3 = parent$11;
var parent$10 = iterator$3;
var iterator$2 = parent$10;
var iterator$1 = iterator$2;
var _Symbol$iterator$1 = getDefaultExportFromCjs(iterator$1);
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof _Symbol$1 && "symbol" == typeof _Symbol$iterator$1 ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof _Symbol$1 && o2.constructor === _Symbol$1 && o2 !== _Symbol$1.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
var WrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
var toPrimitive$4 = WrappedWellKnownSymbolModule.f("toPrimitive");
var parent$$ = toPrimitive$4;
var toPrimitive$3 = parent$$;
var parent$_ = toPrimitive$3;
var toPrimitive$2 = parent$_;
var parent$Z = toPrimitive$2;
var toPrimitive$1 = parent$Z;
var toPrimitive = toPrimitive$1;
var _Symbol$toPrimitive = getDefaultExportFromCjs(toPrimitive);
function _toPrimitive(input, hint) {
  if (_typeof$1(input) !== "object" || input === null)
    return input;
  var prim = input[_Symbol$toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof$1(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof$1(key) === "symbol" ? key : String(key);
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    _Object$defineProperty$1(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  _Object$defineProperty$1(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    _Object$defineProperty$1(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var uncurryThis$6 = functionUncurryThis;
var aCallable$a = aCallable$e;
var isObject$8 = isObject$h;
var hasOwn$7 = hasOwnProperty_1;
var arraySlice$3 = arraySlice$5;
var NATIVE_BIND = functionBindNative;
var $Function = Function;
var concat$6 = uncurryThis$6([].concat);
var join = uncurryThis$6([].join);
var factories = {};
var construct$3 = function(C, argsLength, args) {
  if (!hasOwn$7(factories, argsLength)) {
    var list = [];
    var i = 0;
    for (; i < argsLength; i++)
      list[i] = "a[" + i + "]";
    factories[argsLength] = $Function("C,a", "return new C(" + join(list, ",") + ")");
  }
  return factories[argsLength](C, args);
};
var functionBind = NATIVE_BIND ? $Function.bind : function bind(that) {
  var F = aCallable$a(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice$3(arguments, 1);
  var boundFunction = function bound() {
    var args = concat$6(partArgs, arraySlice$3(arguments));
    return this instanceof boundFunction ? construct$3(F, args.length, args) : F.apply(that, args);
  };
  if (isObject$8(Prototype))
    boundFunction.prototype = Prototype;
  return boundFunction;
};
var $$D = _export;
var bind$f = functionBind;
$$D({ target: "Function", proto: true, forced: Function.bind !== bind$f }, {
  bind: bind$f
});
var global$b = global$p;
var path$i = path$o;
var getBuiltInPrototypeMethod$g = function(CONSTRUCTOR, METHOD) {
  var Namespace = path$i[CONSTRUCTOR + "Prototype"];
  var pureMethod = Namespace && Namespace[METHOD];
  if (pureMethod)
    return pureMethod;
  var NativeConstructor = global$b[CONSTRUCTOR];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  return NativePrototype && NativePrototype[METHOD];
};
var getBuiltInPrototypeMethod$f = getBuiltInPrototypeMethod$g;
var bind$e = getBuiltInPrototypeMethod$f("Function", "bind");
var isPrototypeOf$i = objectIsPrototypeOf;
var method$f = bind$e;
var FunctionPrototype = Function.prototype;
var bind$d = function(it) {
  var own = it.bind;
  return it === FunctionPrototype || isPrototypeOf$i(FunctionPrototype, it) && own === FunctionPrototype.bind ? method$f : own;
};
var parent$Y = bind$d;
var bind$c = parent$Y;
var bind$b = bind$c;
var _bindInstanceProperty$1 = getDefaultExportFromCjs(bind$b);
var aCallable$9 = aCallable$e;
var toObject$8 = toObject$e;
var IndexedObject$1 = indexedObject;
var lengthOfArrayLike$8 = lengthOfArrayLike$d;
var $TypeError$8 = TypeError;
var createMethod = function(IS_RIGHT) {
  return function(that, callbackfn, argumentsLength, memo) {
    aCallable$9(callbackfn);
    var O = toObject$8(that);
    var self2 = IndexedObject$1(O);
    var length = lengthOfArrayLike$8(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2)
      while (true) {
        if (index in self2) {
          memo = self2[index];
          index += i;
          break;
        }
        index += i;
        if (IS_RIGHT ? index < 0 : length <= index) {
          throw new $TypeError$8("Reduce of empty array with no initial value");
        }
      }
    for (; IS_RIGHT ? index >= 0 : length > index; index += i)
      if (index in self2) {
        memo = callbackfn(memo, self2[index], index, O);
      }
    return memo;
  };
};
var arrayReduce = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};
var fails$e = fails$u;
var arrayMethodIsStrict$4 = function(METHOD_NAME, argument) {
  var method2 = [][METHOD_NAME];
  return !!method2 && fails$e(function() {
    method2.call(null, argument || function() {
      return 1;
    }, 1);
  });
};
var global$a = global$p;
var classof$6 = classofRaw$2;
var engineIsNode = classof$6(global$a.process) === "process";
var $$C = _export;
var $reduce = arrayReduce.left;
var arrayMethodIsStrict$3 = arrayMethodIsStrict$4;
var CHROME_VERSION = engineV8Version;
var IS_NODE$4 = engineIsNode;
var CHROME_BUG = !IS_NODE$4 && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED$4 = CHROME_BUG || !arrayMethodIsStrict$3("reduce");
$$C({ target: "Array", proto: true, forced: FORCED$4 }, {
  reduce: function reduce(callbackfn) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : void 0);
  }
});
var getBuiltInPrototypeMethod$e = getBuiltInPrototypeMethod$g;
var reduce$3 = getBuiltInPrototypeMethod$e("Array", "reduce");
var isPrototypeOf$h = objectIsPrototypeOf;
var method$e = reduce$3;
var ArrayPrototype$f = Array.prototype;
var reduce$2 = function(it) {
  var own = it.reduce;
  return it === ArrayPrototype$f || isPrototypeOf$h(ArrayPrototype$f, it) && own === ArrayPrototype$f.reduce ? method$e : own;
};
var parent$X = reduce$2;
var reduce$1 = parent$X;
var reduce2 = reduce$1;
var _reduceInstanceProperty = getDefaultExportFromCjs(reduce2);
var $$B = _export;
var $filter = arrayIteration.filter;
var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$5;
var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport$3("filter");
$$B({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT$3 }, {
  filter: function filter(callbackfn) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var getBuiltInPrototypeMethod$d = getBuiltInPrototypeMethod$g;
var filter$3 = getBuiltInPrototypeMethod$d("Array", "filter");
var isPrototypeOf$g = objectIsPrototypeOf;
var method$d = filter$3;
var ArrayPrototype$e = Array.prototype;
var filter$2 = function(it) {
  var own = it.filter;
  return it === ArrayPrototype$e || isPrototypeOf$g(ArrayPrototype$e, it) && own === ArrayPrototype$e.filter ? method$d : own;
};
var parent$W = filter$2;
var filter$1 = parent$W;
var filter2 = filter$1;
var _filterInstanceProperty = getDefaultExportFromCjs(filter2);
var $$A = _export;
var $map = arrayIteration.map;
var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$5;
var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2("map");
$$A({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
  map: function map(callbackfn) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var getBuiltInPrototypeMethod$c = getBuiltInPrototypeMethod$g;
var map$6 = getBuiltInPrototypeMethod$c("Array", "map");
var isPrototypeOf$f = objectIsPrototypeOf;
var method$c = map$6;
var ArrayPrototype$d = Array.prototype;
var map$5 = function(it) {
  var own = it.map;
  return it === ArrayPrototype$d || isPrototypeOf$f(ArrayPrototype$d, it) && own === ArrayPrototype$d.map ? method$c : own;
};
var parent$V = map$5;
var map$4 = parent$V;
var map$3 = map$4;
var _mapInstanceProperty = getDefaultExportFromCjs(map$3);
var isArray$a = isArray$e;
var lengthOfArrayLike$7 = lengthOfArrayLike$d;
var doesNotExceedSafeInteger$2 = doesNotExceedSafeInteger$4;
var bind$a = functionBindContext;
var flattenIntoArray$1 = function(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind$a(mapper, thisArg) : false;
  var element, elementLen;
  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
      if (depth > 0 && isArray$a(element)) {
        elementLen = lengthOfArrayLike$7(element);
        targetIndex = flattenIntoArray$1(target, original, element, elementLen, targetIndex, depth - 1) - 1;
      } else {
        doesNotExceedSafeInteger$2(targetIndex + 1);
        target[targetIndex] = element;
      }
      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};
var flattenIntoArray_1 = flattenIntoArray$1;
var $$z = _export;
var flattenIntoArray = flattenIntoArray_1;
var aCallable$8 = aCallable$e;
var toObject$7 = toObject$e;
var lengthOfArrayLike$6 = lengthOfArrayLike$d;
var arraySpeciesCreate$1 = arraySpeciesCreate$4;
$$z({ target: "Array", proto: true }, {
  flatMap: function flatMap(callbackfn) {
    var O = toObject$7(this);
    var sourceLen = lengthOfArrayLike$6(O);
    var A;
    aCallable$8(callbackfn);
    A = arraySpeciesCreate$1(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
    return A;
  }
});
var getBuiltInPrototypeMethod$b = getBuiltInPrototypeMethod$g;
var flatMap$3 = getBuiltInPrototypeMethod$b("Array", "flatMap");
var isPrototypeOf$e = objectIsPrototypeOf;
var method$b = flatMap$3;
var ArrayPrototype$c = Array.prototype;
var flatMap$2 = function(it) {
  var own = it.flatMap;
  return it === ArrayPrototype$c || isPrototypeOf$e(ArrayPrototype$c, it) && own === ArrayPrototype$c.flatMap ? method$b : own;
};
var parent$U = flatMap$2;
var flatMap$1 = parent$U;
var flatMap2 = flatMap$1;
var _flatMapInstanceProperty = getDefaultExportFromCjs(flatMap2);
function createNewDataPipeFrom(from3) {
  return new DataPipeUnderConstruction(from3);
}
var SimpleDataPipe = function() {
  function SimpleDataPipe2(_source, _transformers, _target) {
    var _context, _context2, _context3;
    _classCallCheck(this, SimpleDataPipe2);
    _defineProperty(this, "_listeners", {
      add: _bindInstanceProperty$1(_context = this._add).call(_context, this),
      remove: _bindInstanceProperty$1(_context2 = this._remove).call(_context2, this),
      update: _bindInstanceProperty$1(_context3 = this._update).call(_context3, this)
    });
    this._source = _source;
    this._transformers = _transformers;
    this._target = _target;
  }
  _createClass(SimpleDataPipe2, [{
    key: "all",
    value: function all2() {
      this._target.update(this._transformItems(this._source.get()));
      return this;
    }
    /** @inheritDoc */
  }, {
    key: "start",
    value: function start() {
      this._source.on("add", this._listeners.add);
      this._source.on("remove", this._listeners.remove);
      this._source.on("update", this._listeners.update);
      return this;
    }
    /** @inheritDoc */
  }, {
    key: "stop",
    value: function stop() {
      this._source.off("add", this._listeners.add);
      this._source.off("remove", this._listeners.remove);
      this._source.off("update", this._listeners.update);
      return this;
    }
    /**
     * Apply the transformers to the items.
     *
     * @param items - The items to be transformed.
     * @returns The transformed items.
     */
  }, {
    key: "_transformItems",
    value: function _transformItems(items) {
      var _context4;
      return _reduceInstanceProperty(_context4 = this._transformers).call(_context4, function(items2, transform) {
        return transform(items2);
      }, items);
    }
    /**
     * Handle an add event.
     *
     * @param _name - Ignored.
     * @param payload - The payload containing the ids of the added items.
     */
  }, {
    key: "_add",
    value: function _add(_name, payload) {
      if (payload == null) {
        return;
      }
      this._target.add(this._transformItems(this._source.get(payload.items)));
    }
    /**
     * Handle an update event.
     *
     * @param _name - Ignored.
     * @param payload - The payload containing the ids of the updated items.
     */
  }, {
    key: "_update",
    value: function _update(_name, payload) {
      if (payload == null) {
        return;
      }
      this._target.update(this._transformItems(this._source.get(payload.items)));
    }
    /**
     * Handle a remove event.
     *
     * @param _name - Ignored.
     * @param payload - The payload containing the data of the removed items.
     */
  }, {
    key: "_remove",
    value: function _remove(_name, payload) {
      if (payload == null) {
        return;
      }
      this._target.remove(this._transformItems(payload.oldData));
    }
  }]);
  return SimpleDataPipe2;
}();
var DataPipeUnderConstruction = function() {
  function DataPipeUnderConstruction2(_source) {
    _classCallCheck(this, DataPipeUnderConstruction2);
    _defineProperty(this, "_transformers", []);
    this._source = _source;
  }
  _createClass(DataPipeUnderConstruction2, [{
    key: "filter",
    value: function filter3(callback) {
      this._transformers.push(function(input) {
        return _filterInstanceProperty(input).call(input, callback);
      });
      return this;
    }
    /**
     * Map each source item to a new type.
     *
     * @param callback - A mapping function that takes a source item and returns
     * corresponding mapped item.
     * @typeParam TI - Target item type.
     * @typeParam TP - Target item type's id property name.
     * @returns This factory for further configuration.
     */
  }, {
    key: "map",
    value: function map3(callback) {
      this._transformers.push(function(input) {
        return _mapInstanceProperty(input).call(input, callback);
      });
      return this;
    }
    /**
     * Map each source item to zero or more items of a new type.
     *
     * @param callback - A mapping function that takes a source item and returns
     * an array of corresponding mapped items.
     * @typeParam TI - Target item type.
     * @typeParam TP - Target item type's id property name.
     * @returns This factory for further configuration.
     */
  }, {
    key: "flatMap",
    value: function flatMap3(callback) {
      this._transformers.push(function(input) {
        return _flatMapInstanceProperty(input).call(input, callback);
      });
      return this;
    }
    /**
     * Connect this pipe to given data set.
     *
     * @param target - The data set that will receive the items from this pipe.
     * @returns The pipe connected between given data sets and performing
     * configured transformation on the processed items.
     */
  }, {
    key: "to",
    value: function to(target) {
      return new SimpleDataPipe(this._source, this._transformers, target);
    }
  }]);
  return DataPipeUnderConstruction2;
}();
var call$a = functionCall;
var anObject$7 = anObject$d;
var getMethod$1 = getMethod$3;
var iteratorClose$2 = function(iterator2, kind, value) {
  var innerResult, innerError;
  anObject$7(iterator2);
  try {
    innerResult = getMethod$1(iterator2, "return");
    if (!innerResult) {
      if (kind === "throw")
        throw value;
      return value;
    }
    innerResult = call$a(innerResult, iterator2);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === "throw")
    throw value;
  if (innerError)
    throw innerResult;
  anObject$7(innerResult);
  return value;
};
var anObject$6 = anObject$d;
var iteratorClose$1 = iteratorClose$2;
var callWithSafeIterationClosing$1 = function(iterator2, fn, value, ENTRIES2) {
  try {
    return ENTRIES2 ? fn(anObject$6(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose$1(iterator2, "throw", error);
  }
};
var wellKnownSymbol$7 = wellKnownSymbol$n;
var Iterators$1 = iterators;
var ITERATOR$2 = wellKnownSymbol$7("iterator");
var ArrayPrototype$b = Array.prototype;
var isArrayIteratorMethod$2 = function(it) {
  return it !== void 0 && (Iterators$1.Array === it || ArrayPrototype$b[ITERATOR$2] === it);
};
var classof$5 = classof$d;
var getMethod = getMethod$3;
var isNullOrUndefined$3 = isNullOrUndefined$6;
var Iterators = iterators;
var wellKnownSymbol$6 = wellKnownSymbol$n;
var ITERATOR$1 = wellKnownSymbol$6("iterator");
var getIteratorMethod$9 = function(it) {
  if (!isNullOrUndefined$3(it))
    return getMethod(it, ITERATOR$1) || getMethod(it, "@@iterator") || Iterators[classof$5(it)];
};
var call$9 = functionCall;
var aCallable$7 = aCallable$e;
var anObject$5 = anObject$d;
var tryToString$3 = tryToString$6;
var getIteratorMethod$8 = getIteratorMethod$9;
var $TypeError$7 = TypeError;
var getIterator$8 = function(argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$8(argument) : usingIterator;
  if (aCallable$7(iteratorMethod))
    return anObject$5(call$9(iteratorMethod, argument));
  throw new $TypeError$7(tryToString$3(argument) + " is not iterable");
};
var bind$9 = functionBindContext;
var call$8 = functionCall;
var toObject$6 = toObject$e;
var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;
var isConstructor$2 = isConstructor$4;
var lengthOfArrayLike$5 = lengthOfArrayLike$d;
var createProperty$3 = createProperty$6;
var getIterator$7 = getIterator$8;
var getIteratorMethod$7 = getIteratorMethod$9;
var $Array$1 = Array;
var arrayFrom = function from(arrayLike) {
  var O = toObject$6(arrayLike);
  var IS_CONSTRUCTOR = isConstructor$2(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
  var mapping = mapfn !== void 0;
  if (mapping)
    mapfn = bind$9(mapfn, argumentsLength > 2 ? arguments[2] : void 0);
  var iteratorMethod = getIteratorMethod$7(O);
  var index = 0;
  var length, result, step, iterator2, next2, value;
  if (iteratorMethod && !(this === $Array$1 && isArrayIteratorMethod$1(iteratorMethod))) {
    iterator2 = getIterator$7(O, iteratorMethod);
    next2 = iterator2.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (; !(step = call$8(next2, iterator2)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator2, mapfn, [step.value, index], true) : step.value;
      createProperty$3(result, index, value);
    }
  } else {
    length = lengthOfArrayLike$5(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array$1(length);
    for (; length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty$3(result, index, value);
    }
  }
  result.length = index;
  return result;
};
var wellKnownSymbol$5 = wellKnownSymbol$n;
var ITERATOR = wellKnownSymbol$5("iterator");
var SAFE_CLOSING = false;
try {
  called = 0;
  iteratorWithReturn = {
    next: function() {
      return { done: !!called++ };
    },
    "return": function() {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function() {
    return this;
  };
  Array.from(iteratorWithReturn, function() {
    throw 2;
  });
} catch (error) {
}
var called;
var iteratorWithReturn;
var checkCorrectnessOfIteration$2 = function(exec2, SKIP_CLOSING) {
  try {
    if (!SKIP_CLOSING && !SAFE_CLOSING)
      return false;
  } catch (error) {
    return false;
  }
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function() {
      return {
        next: function() {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec2(object);
  } catch (error) {
  }
  return ITERATION_SUPPORT;
};
var $$y = _export;
var from$6 = arrayFrom;
var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$2;
var INCORRECT_ITERATION = !checkCorrectnessOfIteration$1(function(iterable) {
  Array.from(iterable);
});
$$y({ target: "Array", stat: true, forced: INCORRECT_ITERATION }, {
  from: from$6
});
var path$h = path$o;
var from$5 = path$h.Array.from;
var parent$T = from$5;
var from$4 = parent$T;
var from$3 = from$4;
var _Array$from$1 = getDefaultExportFromCjs(from$3);
var getIteratorMethod$6 = getIteratorMethod$9;
var getIteratorMethod_1 = getIteratorMethod$6;
var parent$S = getIteratorMethod_1;
var getIteratorMethod$5 = parent$S;
var parent$R = getIteratorMethod$5;
var getIteratorMethod$4 = parent$R;
var parent$Q = getIteratorMethod$4;
var getIteratorMethod$3 = parent$Q;
var getIteratorMethod$2 = getIteratorMethod$3;
var _getIteratorMethod$1 = getDefaultExportFromCjs(getIteratorMethod$2);
var getIteratorMethod$1 = getIteratorMethod$2;
var _getIteratorMethod = getDefaultExportFromCjs(getIteratorMethod$1);
var $$x = _export;
var isArray$9 = isArray$e;
$$x({ target: "Array", stat: true }, {
  isArray: isArray$9
});
var path$g = path$o;
var isArray$8 = path$g.Array.isArray;
var parent$P = isArray$8;
var isArray$7 = parent$P;
var parent$O = isArray$7;
var isArray$6 = parent$O;
var parent$N = isArray$6;
var isArray$5 = parent$N;
var isArray$4 = isArray$5;
var _Array$isArray$1 = getDefaultExportFromCjs(isArray$4);
function _arrayWithHoles(arr) {
  if (_Array$isArray$1(arr))
    return arr;
}
var DESCRIPTORS$8 = descriptors;
var isArray$3 = isArray$e;
var $TypeError$6 = TypeError;
var getOwnPropertyDescriptor$5 = Object.getOwnPropertyDescriptor;
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$8 && !function() {
  if (this !== void 0)
    return true;
  try {
    Object.defineProperty([], "length", { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();
var arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function(O, length) {
  if (isArray$3(O) && !getOwnPropertyDescriptor$5(O, "length").writable) {
    throw new $TypeError$6("Cannot set read only .length");
  }
  return O.length = length;
} : function(O, length) {
  return O.length = length;
};
var $$w = _export;
var toObject$5 = toObject$e;
var lengthOfArrayLike$4 = lengthOfArrayLike$d;
var setArrayLength$1 = arraySetLength;
var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$4;
var fails$d = fails$u;
var INCORRECT_TO_LENGTH = fails$d(function() {
  return [].push.call({ length: 4294967296 }, 1) !== 4294967297;
});
var properErrorOnNonWritableLength = function() {
  try {
    Object.defineProperty([], "length", { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};
var FORCED$3 = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();
$$w({ target: "Array", proto: true, arity: 1, forced: FORCED$3 }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject$5(this);
    var len = lengthOfArrayLike$4(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger$1(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength$1(O, len);
    return len;
  }
});
var getBuiltInPrototypeMethod$a = getBuiltInPrototypeMethod$g;
var push$8 = getBuiltInPrototypeMethod$a("Array", "push");
var isPrototypeOf$d = objectIsPrototypeOf;
var method$a = push$8;
var ArrayPrototype$a = Array.prototype;
var push$7 = function(it) {
  var own = it.push;
  return it === ArrayPrototype$a || isPrototypeOf$d(ArrayPrototype$a, it) && own === ArrayPrototype$a.push ? method$a : own;
};
var parent$M = push$7;
var push$6 = parent$M;
var parent$L = push$6;
var push$5 = parent$L;
var parent$K = push$5;
var push$4 = parent$K;
var push$3 = push$4;
var _pushInstanceProperty = getDefaultExportFromCjs(push$3);
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof _Symbol$1 && _getIteratorMethod$1(r) || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (_pushInstanceProperty(a).call(a, e.value), a.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a;
  }
}
var $$v = _export;
var isArray$2 = isArray$e;
var isConstructor$1 = isConstructor$4;
var isObject$7 = isObject$h;
var toAbsoluteIndex$1 = toAbsoluteIndex$4;
var lengthOfArrayLike$3 = lengthOfArrayLike$d;
var toIndexedObject$2 = toIndexedObject$a;
var createProperty$2 = createProperty$6;
var wellKnownSymbol$4 = wellKnownSymbol$n;
var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$5;
var nativeSlice = arraySlice$5;
var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1("slice");
var SPECIES$3 = wellKnownSymbol$4("species");
var $Array = Array;
var max$1 = Math.max;
$$v({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
  slice: function slice(start, end) {
    var O = toIndexedObject$2(this);
    var length = lengthOfArrayLike$3(O);
    var k = toAbsoluteIndex$1(start, length);
    var fin = toAbsoluteIndex$1(end === void 0 ? length : end, length);
    var Constructor, result, n;
    if (isArray$2(O)) {
      Constructor = O.constructor;
      if (isConstructor$1(Constructor) && (Constructor === $Array || isArray$2(Constructor.prototype))) {
        Constructor = void 0;
      } else if (isObject$7(Constructor)) {
        Constructor = Constructor[SPECIES$3];
        if (Constructor === null)
          Constructor = void 0;
      }
      if (Constructor === $Array || Constructor === void 0) {
        return nativeSlice(O, k, fin);
      }
    }
    result = new (Constructor === void 0 ? $Array : Constructor)(max$1(fin - k, 0));
    for (n = 0; k < fin; k++, n++)
      if (k in O)
        createProperty$2(result, n, O[k]);
    result.length = n;
    return result;
  }
});
var getBuiltInPrototypeMethod$9 = getBuiltInPrototypeMethod$g;
var slice$6 = getBuiltInPrototypeMethod$9("Array", "slice");
var isPrototypeOf$c = objectIsPrototypeOf;
var method$9 = slice$6;
var ArrayPrototype$9 = Array.prototype;
var slice$5 = function(it) {
  var own = it.slice;
  return it === ArrayPrototype$9 || isPrototypeOf$c(ArrayPrototype$9, it) && own === ArrayPrototype$9.slice ? method$9 : own;
};
var parent$J = slice$5;
var slice$4 = parent$J;
var parent$I = slice$4;
var slice$3 = parent$I;
var parent$H = slice$3;
var slice$2 = parent$H;
var slice$1 = slice$2;
var _sliceInstanceProperty$1 = getDefaultExportFromCjs(slice$1);
var parent$G = from$4;
var from$2 = parent$G;
var parent$F = from$2;
var from$1 = parent$F;
var from2 = from$1;
var _Array$from = getDefaultExportFromCjs(from2);
function _arrayLikeToArray$4(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _unsupportedIterableToArray$4(o, minLen) {
  var _context;
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$4(o, minLen);
  var n = _sliceInstanceProperty$1(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return _Array$from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$4(o, minLen);
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$4(arr, i) || _nonIterableRest();
}
function _arrayWithoutHoles(arr) {
  if (_Array$isArray$1(arr))
    return _arrayLikeToArray$4(arr);
}
function _iterableToArray(iter) {
  if (typeof _Symbol$1 !== "undefined" && _getIteratorMethod$1(iter) != null || iter["@@iterator"] != null)
    return _Array$from(iter);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$4(arr) || _nonIterableSpread();
}
var symbol = symbol$4;
var _Symbol = getDefaultExportFromCjs(symbol);
var getBuiltInPrototypeMethod$8 = getBuiltInPrototypeMethod$g;
var concat$5 = getBuiltInPrototypeMethod$8("Array", "concat");
var isPrototypeOf$b = objectIsPrototypeOf;
var method$8 = concat$5;
var ArrayPrototype$8 = Array.prototype;
var concat$4 = function(it) {
  var own = it.concat;
  return it === ArrayPrototype$8 || isPrototypeOf$b(ArrayPrototype$8, it) && own === ArrayPrototype$8.concat ? method$8 : own;
};
var parent$E = concat$4;
var concat$3 = parent$E;
var concat$2 = concat$3;
var _concatInstanceProperty = getDefaultExportFromCjs(concat$2);
var slice2 = slice$4;
var _sliceInstanceProperty = getDefaultExportFromCjs(slice2);
var getBuiltIn$5 = getBuiltIn$f;
var uncurryThis$5 = functionUncurryThis;
var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$4 = anObject$d;
var concat$1 = uncurryThis$5([].concat);
var ownKeys$7 = getBuiltIn$5("Reflect", "ownKeys") || function ownKeys(it) {
  var keys4 = getOwnPropertyNamesModule$1.f(anObject$4(it));
  var getOwnPropertySymbols3 = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols3 ? concat$1(keys4, getOwnPropertySymbols3(it)) : keys4;
};
var $$u = _export;
var ownKeys$6 = ownKeys$7;
$$u({ target: "Reflect", stat: true }, {
  ownKeys: ownKeys$6
});
var path$f = path$o;
var ownKeys$5 = path$f.Reflect.ownKeys;
var parent$D = ownKeys$5;
var ownKeys$4 = parent$D;
var ownKeys$3 = ownKeys$4;
var _Reflect$ownKeys = getDefaultExportFromCjs(ownKeys$3);
var isArray$1 = isArray$7;
var _Array$isArray = getDefaultExportFromCjs(isArray$1);
var $$t = _export;
var toObject$4 = toObject$e;
var nativeKeys = objectKeys$3;
var fails$c = fails$u;
var FAILS_ON_PRIMITIVES$2 = fails$c(function() {
  nativeKeys(1);
});
$$t({ target: "Object", stat: true, forced: FAILS_ON_PRIMITIVES$2 }, {
  keys: function keys2(it) {
    return nativeKeys(toObject$4(it));
  }
});
var path$e = path$o;
var keys$6 = path$e.Object.keys;
var parent$C = keys$6;
var keys$5 = parent$C;
var keys$4 = keys$5;
var _Object$keys = getDefaultExportFromCjs(keys$4);
var $forEach = arrayIteration.forEach;
var arrayMethodIsStrict$2 = arrayMethodIsStrict$4;
var STRICT_METHOD$2 = arrayMethodIsStrict$2("forEach");
var arrayForEach = !STRICT_METHOD$2 ? function forEach(callbackfn) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
} : [].forEach;
var $$s = _export;
var forEach$8 = arrayForEach;
$$s({ target: "Array", proto: true, forced: [].forEach !== forEach$8 }, {
  forEach: forEach$8
});
var getBuiltInPrototypeMethod$7 = getBuiltInPrototypeMethod$g;
var forEach$7 = getBuiltInPrototypeMethod$7("Array", "forEach");
var parent$B = forEach$7;
var forEach$6 = parent$B;
var classof$4 = classof$d;
var hasOwn$6 = hasOwnProperty_1;
var isPrototypeOf$a = objectIsPrototypeOf;
var method$7 = forEach$6;
var ArrayPrototype$7 = Array.prototype;
var DOMIterables$3 = {
  DOMTokenList: true,
  NodeList: true
};
var forEach$5 = function(it) {
  var own = it.forEach;
  return it === ArrayPrototype$7 || isPrototypeOf$a(ArrayPrototype$7, it) && own === ArrayPrototype$7.forEach || hasOwn$6(DOMIterables$3, classof$4(it)) ? method$7 : own;
};
var forEach$4 = forEach$5;
var _forEachInstanceProperty = getDefaultExportFromCjs(forEach$4);
var $$r = _export;
var uncurryThis$4 = functionUncurryThis;
var isArray2 = isArray$e;
var nativeReverse = uncurryThis$4([].reverse);
var test$1 = [1, 2];
$$r({ target: "Array", proto: true, forced: String(test$1) === String(test$1.reverse()) }, {
  reverse: function reverse() {
    if (isArray2(this))
      this.length = this.length;
    return nativeReverse(this);
  }
});
var getBuiltInPrototypeMethod$6 = getBuiltInPrototypeMethod$g;
var reverse$6 = getBuiltInPrototypeMethod$6("Array", "reverse");
var isPrototypeOf$9 = objectIsPrototypeOf;
var method$6 = reverse$6;
var ArrayPrototype$6 = Array.prototype;
var reverse$5 = function(it) {
  var own = it.reverse;
  return it === ArrayPrototype$6 || isPrototypeOf$9(ArrayPrototype$6, it) && own === ArrayPrototype$6.reverse ? method$6 : own;
};
var parent$A = reverse$5;
var reverse$4 = parent$A;
var reverse$3 = reverse$4;
var _reverseInstanceProperty = getDefaultExportFromCjs(reverse$3);
var tryToString$2 = tryToString$6;
var $TypeError$5 = TypeError;
var deletePropertyOrThrow$2 = function(O, P) {
  if (!delete O[P])
    throw new $TypeError$5("Cannot delete property " + tryToString$2(P) + " of " + tryToString$2(O));
};
var $$q = _export;
var toObject$3 = toObject$e;
var toAbsoluteIndex = toAbsoluteIndex$4;
var toIntegerOrInfinity = toIntegerOrInfinity$4;
var lengthOfArrayLike$2 = lengthOfArrayLike$d;
var setArrayLength = arraySetLength;
var doesNotExceedSafeInteger = doesNotExceedSafeInteger$4;
var arraySpeciesCreate = arraySpeciesCreate$4;
var createProperty$1 = createProperty$6;
var deletePropertyOrThrow$1 = deletePropertyOrThrow$2;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$5;
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("splice");
var max = Math.max;
var min = Math.min;
$$q({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount) {
    var O = toObject$3(this);
    var len = lengthOfArrayLike$2(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from3, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    }
    doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from3 = actualStart + k;
      if (from3 in O)
        createProperty$1(A, k, O[from3]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from3 = k + actualDeleteCount;
        to = k + insertCount;
        if (from3 in O)
          O[to] = O[from3];
        else
          deletePropertyOrThrow$1(O, to);
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--)
        deletePropertyOrThrow$1(O, k - 1);
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from3 = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from3 in O)
          O[to] = O[from3];
        else
          deletePropertyOrThrow$1(O, to);
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    setArrayLength(O, len - actualDeleteCount + insertCount);
    return A;
  }
});
var getBuiltInPrototypeMethod$5 = getBuiltInPrototypeMethod$g;
var splice$3 = getBuiltInPrototypeMethod$5("Array", "splice");
var isPrototypeOf$8 = objectIsPrototypeOf;
var method$5 = splice$3;
var ArrayPrototype$5 = Array.prototype;
var splice$2 = function(it) {
  var own = it.splice;
  return it === ArrayPrototype$5 || isPrototypeOf$8(ArrayPrototype$5, it) && own === ArrayPrototype$5.splice ? method$5 : own;
};
var parent$z = splice$2;
var splice$1 = parent$z;
var splice2 = splice$1;
var _spliceInstanceProperty = getDefaultExportFromCjs(splice2);
var DESCRIPTORS$7 = descriptors;
var uncurryThis$3 = functionUncurryThis;
var call$7 = functionCall;
var fails$b = fails$u;
var objectKeys = objectKeys$3;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$2 = toObject$e;
var IndexedObject = indexedObject;
var $assign = Object.assign;
var defineProperty$3 = Object.defineProperty;
var concat2 = uncurryThis$3([].concat);
var objectAssign = !$assign || fails$b(function() {
  if (DESCRIPTORS$7 && $assign({ b: 1 }, $assign(defineProperty$3({}, "a", {
    enumerable: true,
    get: function() {
      defineProperty$3(this, "b", {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1)
    return true;
  var A = {};
  var B = {};
  var symbol2 = Symbol("assign detection");
  var alphabet = "abcdefghijklmnopqrst";
  A[symbol2] = 7;
  alphabet.split("").forEach(function(chr) {
    B[chr] = chr;
  });
  return $assign({}, A)[symbol2] !== 7 || objectKeys($assign({}, B)).join("") !== alphabet;
}) ? function assign(target, source) {
  var T = toObject$2(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols3 = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable3 = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys4 = getOwnPropertySymbols3 ? concat2(objectKeys(S), getOwnPropertySymbols3(S)) : objectKeys(S);
    var length = keys4.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys4[j++];
      if (!DESCRIPTORS$7 || call$7(propertyIsEnumerable3, S, key))
        T[key] = S[key];
    }
  }
  return T;
} : $assign;
var $$p = _export;
var assign$5 = objectAssign;
$$p({ target: "Object", stat: true, arity: 2, forced: Object.assign !== assign$5 }, {
  assign: assign$5
});
var path$d = path$o;
var assign$4 = path$d.Object.assign;
var parent$y = assign$4;
var assign$3 = parent$y;
var assign$2 = assign$3;
var _Object$assign = getDefaultExportFromCjs(assign$2);
var $$o = _export;
var fails$a = fails$u;
var toObject$1 = toObject$e;
var nativeGetPrototypeOf = objectGetPrototypeOf;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;
var FAILS_ON_PRIMITIVES$1 = fails$a(function() {
  nativeGetPrototypeOf(1);
});
$$o({ target: "Object", stat: true, forced: FAILS_ON_PRIMITIVES$1, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject$1(it));
  }
});
var path$c = path$o;
var getPrototypeOf$5 = path$c.Object.getPrototypeOf;
var parent$x = getPrototypeOf$5;
var getPrototypeOf$4 = parent$x;
var $$n = _export;
var DESCRIPTORS$6 = descriptors;
var create$9 = objectCreate;
$$n({ target: "Object", stat: true, sham: !DESCRIPTORS$6 }, {
  create: create$9
});
var path$b = path$o;
var Object$3 = path$b.Object;
var create$8 = function create3(P, D) {
  return Object$3.create(P, D);
};
var parent$w = create$8;
var create$7 = parent$w;
var create$6 = create$7;
var _Object$create$1 = getDefaultExportFromCjs(create$6);
var path$a = path$o;
var apply$3 = functionApply;
if (!path$a.JSON)
  path$a.JSON = { stringify: JSON.stringify };
var stringify$2 = function stringify(it, replacer, space) {
  return apply$3(path$a.JSON.stringify, null, arguments);
};
var parent$v = stringify$2;
var stringify$1 = parent$v;
var stringify2 = stringify$1;
var _JSON$stringify = getDefaultExportFromCjs(stringify2);
var engineIsBun = typeof Bun == "function" && Bun && typeof Bun.version == "string";
var $TypeError$4 = TypeError;
var validateArgumentsLength$2 = function(passed, required) {
  if (passed < required)
    throw new $TypeError$4("Not enough arguments");
  return passed;
};
var global$9 = global$p;
var apply$2 = functionApply;
var isCallable$5 = isCallable$m;
var ENGINE_IS_BUN = engineIsBun;
var USER_AGENT = engineUserAgent;
var arraySlice$2 = arraySlice$5;
var validateArgumentsLength$1 = validateArgumentsLength$2;
var Function$2 = global$9.Function;
var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && function() {
  var version2 = global$9.Bun.version.split(".");
  return version2.length < 3 || version2[0] === "0" && (version2[1] < 3 || version2[1] === "3" && version2[2] === "0");
}();
var schedulersFix$2 = function(scheduler, hasTimeArg) {
  var firstParamIndex = hasTimeArg ? 2 : 1;
  return WRAP ? function(handler, timeout) {
    var boundArgs = validateArgumentsLength$1(arguments.length, 1) > firstParamIndex;
    var fn = isCallable$5(handler) ? handler : Function$2(handler);
    var params = boundArgs ? arraySlice$2(arguments, firstParamIndex) : [];
    var callback = boundArgs ? function() {
      apply$2(fn, this, params);
    } : fn;
    return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
  } : scheduler;
};
var $$m = _export;
var global$8 = global$p;
var schedulersFix$1 = schedulersFix$2;
var setInterval = schedulersFix$1(global$8.setInterval, true);
$$m({ global: true, bind: true, forced: global$8.setInterval !== setInterval }, {
  setInterval
});
var $$l = _export;
var global$7 = global$p;
var schedulersFix = schedulersFix$2;
var setTimeout$3 = schedulersFix(global$7.setTimeout, true);
$$l({ global: true, bind: true, forced: global$7.setTimeout !== setTimeout$3 }, {
  setTimeout: setTimeout$3
});
var path$9 = path$o;
var setTimeout$2 = path$9.setTimeout;
var setTimeout$1 = setTimeout$2;
var _setTimeout = getDefaultExportFromCjs(setTimeout$1);
var componentEmitter = { exports: {} };
(function(module) {
  function Emitter2(object) {
    if (object) {
      return mixin(object);
    }
    this._callbacks = /* @__PURE__ */ new Map();
  }
  function mixin(object) {
    Object.assign(object, Emitter2.prototype);
    object._callbacks = /* @__PURE__ */ new Map();
    return object;
  }
  Emitter2.prototype.on = function(event, listener) {
    const callbacks = this._callbacks.get(event) ?? [];
    callbacks.push(listener);
    this._callbacks.set(event, callbacks);
    return this;
  };
  Emitter2.prototype.once = function(event, listener) {
    const on = (...arguments_) => {
      this.off(event, on);
      listener.apply(this, arguments_);
    };
    on.fn = listener;
    this.on(event, on);
    return this;
  };
  Emitter2.prototype.off = function(event, listener) {
    if (event === void 0 && listener === void 0) {
      this._callbacks.clear();
      return this;
    }
    if (listener === void 0) {
      this._callbacks.delete(event);
      return this;
    }
    const callbacks = this._callbacks.get(event);
    if (callbacks) {
      for (const [index, callback] of callbacks.entries()) {
        if (callback === listener || callback.fn === listener) {
          callbacks.splice(index, 1);
          break;
        }
      }
      if (callbacks.length === 0) {
        this._callbacks.delete(event);
      } else {
        this._callbacks.set(event, callbacks);
      }
    }
    return this;
  };
  Emitter2.prototype.emit = function(event, ...arguments_) {
    const callbacks = this._callbacks.get(event);
    if (callbacks) {
      const callbacksCopy = [...callbacks];
      for (const callback of callbacksCopy) {
        callback.apply(this, arguments_);
      }
    }
    return this;
  };
  Emitter2.prototype.listeners = function(event) {
    return this._callbacks.get(event) ?? [];
  };
  Emitter2.prototype.listenerCount = function(event) {
    if (event) {
      return this.listeners(event).length;
    }
    let totalCount = 0;
    for (const callbacks of this._callbacks.values()) {
      totalCount += callbacks.length;
    }
    return totalCount;
  };
  Emitter2.prototype.hasListeners = function(event) {
    return this.listenerCount(event) > 0;
  };
  Emitter2.prototype.addEventListener = Emitter2.prototype.on;
  Emitter2.prototype.removeListener = Emitter2.prototype.off;
  Emitter2.prototype.removeEventListener = Emitter2.prototype.off;
  Emitter2.prototype.removeAllListeners = Emitter2.prototype.off;
  {
    module.exports = Emitter2;
  }
})(componentEmitter);
var componentEmitterExports = componentEmitter.exports;
var Emitter = getDefaultExportFromCjs(componentEmitterExports);
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
function _assertThisInitialized$1(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
var assign2;
if (typeof Object.assign !== "function") {
  assign2 = function assign3(target) {
    if (target === void 0 || target === null) {
      throw new TypeError("Cannot convert undefined or null to object");
    }
    var output = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source !== void 0 && source !== null) {
        for (var nextKey in source) {
          if (source.hasOwnProperty(nextKey)) {
            output[nextKey] = source[nextKey];
          }
        }
      }
    }
    return output;
  };
} else {
  assign2 = Object.assign;
}
var assign$1 = assign2;
var VENDOR_PREFIXES = ["", "webkit", "Moz", "MS", "ms", "o"];
var TEST_ELEMENT = typeof document === "undefined" ? {
  style: {}
} : document.createElement("div");
var TYPE_FUNCTION = "function";
var round = Math.round;
var abs = Math.abs;
var now = Date.now;
function prefixed(obj, property) {
  var prefix;
  var prop;
  var camelProp = property[0].toUpperCase() + property.slice(1);
  var i = 0;
  while (i < VENDOR_PREFIXES.length) {
    prefix = VENDOR_PREFIXES[i];
    prop = prefix ? prefix + camelProp : property;
    if (prop in obj) {
      return prop;
    }
    i++;
  }
  return void 0;
}
var win;
if (typeof window === "undefined") {
  win = {};
} else {
  win = window;
}
var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, "touchAction");
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== void 0;
function getTouchActionProps() {
  if (!NATIVE_TOUCH_ACTION) {
    return false;
  }
  var touchMap = {};
  var cssSupports = win.CSS && win.CSS.supports;
  ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(val) {
    return touchMap[val] = cssSupports ? win.CSS.supports("touch-action", val) : true;
  });
  return touchMap;
}
var TOUCH_ACTION_COMPUTE = "compute";
var TOUCH_ACTION_AUTO = "auto";
var TOUCH_ACTION_MANIPULATION = "manipulation";
var TOUCH_ACTION_NONE = "none";
var TOUCH_ACTION_PAN_X = "pan-x";
var TOUCH_ACTION_PAN_Y = "pan-y";
var TOUCH_ACTION_MAP = getTouchActionProps();
var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
var SUPPORT_TOUCH = "ontouchstart" in win;
var SUPPORT_POINTER_EVENTS = prefixed(win, "PointerEvent") !== void 0;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
var INPUT_TYPE_TOUCH = "touch";
var INPUT_TYPE_PEN = "pen";
var INPUT_TYPE_MOUSE = "mouse";
var INPUT_TYPE_KINECT = "kinect";
var COMPUTE_INTERVAL = 25;
var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;
var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;
var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
var PROPS_XY = ["x", "y"];
var PROPS_CLIENT_XY = ["clientX", "clientY"];
function each(obj, iterator2, context) {
  var i;
  if (!obj) {
    return;
  }
  if (obj.forEach) {
    obj.forEach(iterator2, context);
  } else if (obj.length !== void 0) {
    i = 0;
    while (i < obj.length) {
      iterator2.call(context, obj[i], i, obj);
      i++;
    }
  } else {
    for (i in obj) {
      obj.hasOwnProperty(i) && iterator2.call(context, obj[i], i, obj);
    }
  }
}
function boolOrFn(val, args) {
  if (typeof val === TYPE_FUNCTION) {
    return val.apply(args ? args[0] || void 0 : void 0, args);
  }
  return val;
}
function inStr(str, find) {
  return str.indexOf(find) > -1;
}
function cleanTouchActions(actions) {
  if (inStr(actions, TOUCH_ACTION_NONE)) {
    return TOUCH_ACTION_NONE;
  }
  var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
  var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
  if (hasPanX && hasPanY) {
    return TOUCH_ACTION_NONE;
  }
  if (hasPanX || hasPanY) {
    return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
  }
  if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
    return TOUCH_ACTION_MANIPULATION;
  }
  return TOUCH_ACTION_AUTO;
}
var TouchAction = function() {
  function TouchAction2(manager, value) {
    this.manager = manager;
    this.set(value);
  }
  var _proto = TouchAction2.prototype;
  _proto.set = function set2(value) {
    if (value === TOUCH_ACTION_COMPUTE) {
      value = this.compute();
    }
    if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
      this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
    }
    this.actions = value.toLowerCase().trim();
  };
  _proto.update = function update() {
    this.set(this.manager.options.touchAction);
  };
  _proto.compute = function compute() {
    var actions = [];
    each(this.manager.recognizers, function(recognizer) {
      if (boolOrFn(recognizer.options.enable, [recognizer])) {
        actions = actions.concat(recognizer.getTouchAction());
      }
    });
    return cleanTouchActions(actions.join(" "));
  };
  _proto.preventDefaults = function preventDefaults(input) {
    var srcEvent = input.srcEvent;
    var direction = input.offsetDirection;
    if (this.manager.session.prevented) {
      srcEvent.preventDefault();
      return;
    }
    var actions = this.actions;
    var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];
    if (hasNone) {
      var isTapPointer = input.pointers.length === 1;
      var isTapMovement = input.distance < 2;
      var isTapTouchTime = input.deltaTime < 250;
      if (isTapPointer && isTapMovement && isTapTouchTime) {
        return;
      }
    }
    if (hasPanX && hasPanY) {
      return;
    }
    if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) {
      return this.preventSrc(srcEvent);
    }
  };
  _proto.preventSrc = function preventSrc(srcEvent) {
    this.manager.session.prevented = true;
    srcEvent.preventDefault();
  };
  return TouchAction2;
}();
function hasParent(node2, parent2) {
  while (node2) {
    if (node2 === parent2) {
      return true;
    }
    node2 = node2.parentNode;
  }
  return false;
}
function getCenter(pointers) {
  var pointersLength = pointers.length;
  if (pointersLength === 1) {
    return {
      x: round(pointers[0].clientX),
      y: round(pointers[0].clientY)
    };
  }
  var x = 0;
  var y = 0;
  var i = 0;
  while (i < pointersLength) {
    x += pointers[i].clientX;
    y += pointers[i].clientY;
    i++;
  }
  return {
    x: round(x / pointersLength),
    y: round(y / pointersLength)
  };
}
function simpleCloneInputData(input) {
  var pointers = [];
  var i = 0;
  while (i < input.pointers.length) {
    pointers[i] = {
      clientX: round(input.pointers[i].clientX),
      clientY: round(input.pointers[i].clientY)
    };
    i++;
  }
  return {
    timeStamp: now(),
    pointers,
    center: getCenter(pointers),
    deltaX: input.deltaX,
    deltaY: input.deltaY
  };
}
function getDistance(p1, p2, props) {
  if (!props) {
    props = PROPS_XY;
  }
  var x = p2[props[0]] - p1[props[0]];
  var y = p2[props[1]] - p1[props[1]];
  return Math.sqrt(x * x + y * y);
}
function getAngle(p1, p2, props) {
  if (!props) {
    props = PROPS_XY;
  }
  var x = p2[props[0]] - p1[props[0]];
  var y = p2[props[1]] - p1[props[1]];
  return Math.atan2(y, x) * 180 / Math.PI;
}
function getDirection(x, y) {
  if (x === y) {
    return DIRECTION_NONE;
  }
  if (abs(x) >= abs(y)) {
    return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
  }
  return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}
function computeDeltaXY(session, input) {
  var center = input.center;
  var offset = session.offsetDelta || {};
  var prevDelta = session.prevDelta || {};
  var prevInput = session.prevInput || {};
  if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
    prevDelta = session.prevDelta = {
      x: prevInput.deltaX || 0,
      y: prevInput.deltaY || 0
    };
    offset = session.offsetDelta = {
      x: center.x,
      y: center.y
    };
  }
  input.deltaX = prevDelta.x + (center.x - offset.x);
  input.deltaY = prevDelta.y + (center.y - offset.y);
}
function getVelocity(deltaTime, x, y) {
  return {
    x: x / deltaTime || 0,
    y: y / deltaTime || 0
  };
}
function getScale(start, end) {
  return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}
function getRotation(start, end) {
  return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}
function computeIntervalInputData(session, input) {
  var last = session.lastInterval || input;
  var deltaTime = input.timeStamp - last.timeStamp;
  var velocity;
  var velocityX;
  var velocityY;
  var direction;
  if (input.eventType !== INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === void 0)) {
    var deltaX = input.deltaX - last.deltaX;
    var deltaY = input.deltaY - last.deltaY;
    var v = getVelocity(deltaTime, deltaX, deltaY);
    velocityX = v.x;
    velocityY = v.y;
    velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
    direction = getDirection(deltaX, deltaY);
    session.lastInterval = input;
  } else {
    velocity = last.velocity;
    velocityX = last.velocityX;
    velocityY = last.velocityY;
    direction = last.direction;
  }
  input.velocity = velocity;
  input.velocityX = velocityX;
  input.velocityY = velocityY;
  input.direction = direction;
}
function computeInputData(manager, input) {
  var session = manager.session;
  var pointers = input.pointers;
  var pointersLength = pointers.length;
  if (!session.firstInput) {
    session.firstInput = simpleCloneInputData(input);
  }
  if (pointersLength > 1 && !session.firstMultiple) {
    session.firstMultiple = simpleCloneInputData(input);
  } else if (pointersLength === 1) {
    session.firstMultiple = false;
  }
  var firstInput = session.firstInput, firstMultiple = session.firstMultiple;
  var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
  var center = input.center = getCenter(pointers);
  input.timeStamp = now();
  input.deltaTime = input.timeStamp - firstInput.timeStamp;
  input.angle = getAngle(offsetCenter, center);
  input.distance = getDistance(offsetCenter, center);
  computeDeltaXY(session, input);
  input.offsetDirection = getDirection(input.deltaX, input.deltaY);
  var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
  input.overallVelocityX = overallVelocity.x;
  input.overallVelocityY = overallVelocity.y;
  input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;
  input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
  input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
  input.maxPointers = !session.prevInput ? input.pointers.length : input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers;
  computeIntervalInputData(session, input);
  var target = manager.element;
  var srcEvent = input.srcEvent;
  var srcEventTarget;
  if (srcEvent.composedPath) {
    srcEventTarget = srcEvent.composedPath()[0];
  } else if (srcEvent.path) {
    srcEventTarget = srcEvent.path[0];
  } else {
    srcEventTarget = srcEvent.target;
  }
  if (hasParent(srcEventTarget, target)) {
    target = srcEventTarget;
  }
  input.target = target;
}
function inputHandler(manager, eventType, input) {
  var pointersLen = input.pointers.length;
  var changedPointersLen = input.changedPointers.length;
  var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
  var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
  input.isFirst = !!isFirst;
  input.isFinal = !!isFinal;
  if (isFirst) {
    manager.session = {};
  }
  input.eventType = eventType;
  computeInputData(manager, input);
  manager.emit("hammer.input", input);
  manager.recognize(input);
  manager.session.prevInput = input;
}
function splitStr(str) {
  return str.trim().split(/\s+/g);
}
function addEventListeners(target, types, handler) {
  each(splitStr(types), function(type) {
    target.addEventListener(type, handler, false);
  });
}
function removeEventListeners(target, types, handler) {
  each(splitStr(types), function(type) {
    target.removeEventListener(type, handler, false);
  });
}
function getWindowForElement(element) {
  var doc = element.ownerDocument || element;
  return doc.defaultView || doc.parentWindow || window;
}
var Input = function() {
  function Input2(manager, callback) {
    var self2 = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;
    this.domHandler = function(ev) {
      if (boolOrFn(manager.options.enable, [manager])) {
        self2.handler(ev);
      }
    };
    this.init();
  }
  var _proto = Input2.prototype;
  _proto.handler = function handler() {
  };
  _proto.init = function init() {
    this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
    this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
    this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
  };
  _proto.destroy = function destroy() {
    this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
    this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
    this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
  };
  return Input2;
}();
function inArray(src, find, findByKey) {
  if (src.indexOf && !findByKey) {
    return src.indexOf(find);
  } else {
    var i = 0;
    while (i < src.length) {
      if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) {
        return i;
      }
      i++;
    }
    return -1;
  }
}
var POINTER_INPUT_MAP = {
  pointerdown: INPUT_START,
  pointermove: INPUT_MOVE,
  pointerup: INPUT_END,
  pointercancel: INPUT_CANCEL,
  pointerout: INPUT_CANCEL
};
var IE10_POINTER_TYPE_ENUM = {
  2: INPUT_TYPE_TOUCH,
  3: INPUT_TYPE_PEN,
  4: INPUT_TYPE_MOUSE,
  5: INPUT_TYPE_KINECT
  // see https://twitter.com/jacobrossi/status/480596438489890816
};
var POINTER_ELEMENT_EVENTS = "pointerdown";
var POINTER_WINDOW_EVENTS = "pointermove pointerup pointercancel";
if (win.MSPointerEvent && !win.PointerEvent) {
  POINTER_ELEMENT_EVENTS = "MSPointerDown";
  POINTER_WINDOW_EVENTS = "MSPointerMove MSPointerUp MSPointerCancel";
}
var PointerEventInput = function(_Input) {
  _inheritsLoose(PointerEventInput2, _Input);
  function PointerEventInput2() {
    var _this;
    var proto = PointerEventInput2.prototype;
    proto.evEl = POINTER_ELEMENT_EVENTS;
    proto.evWin = POINTER_WINDOW_EVENTS;
    _this = _Input.apply(this, arguments) || this;
    _this.store = _this.manager.session.pointerEvents = [];
    return _this;
  }
  var _proto = PointerEventInput2.prototype;
  _proto.handler = function handler(ev) {
    var store = this.store;
    var removePointer = false;
    var eventTypeNormalized = ev.type.toLowerCase().replace("ms", "");
    var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
    var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
    var isTouch = pointerType === INPUT_TYPE_TOUCH;
    var storeIndex = inArray(store, ev.pointerId, "pointerId");
    if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
      if (storeIndex < 0) {
        store.push(ev);
        storeIndex = store.length - 1;
      }
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
      removePointer = true;
    }
    if (storeIndex < 0) {
      return;
    }
    store[storeIndex] = ev;
    this.callback(this.manager, eventType, {
      pointers: store,
      changedPointers: [ev],
      pointerType,
      srcEvent: ev
    });
    if (removePointer) {
      store.splice(storeIndex, 1);
    }
  };
  return PointerEventInput2;
}(Input);
function toArray(obj) {
  return Array.prototype.slice.call(obj, 0);
}
function uniqueArray(src, key, sort3) {
  var results = [];
  var values2 = [];
  var i = 0;
  while (i < src.length) {
    var val = key ? src[i][key] : src[i];
    if (inArray(values2, val) < 0) {
      results.push(src[i]);
    }
    values2[i] = val;
    i++;
  }
  if (sort3) {
    if (!key) {
      results = results.sort();
    } else {
      results = results.sort(function(a, b) {
        return a[key] > b[key];
      });
    }
  }
  return results;
}
var TOUCH_INPUT_MAP = {
  touchstart: INPUT_START,
  touchmove: INPUT_MOVE,
  touchend: INPUT_END,
  touchcancel: INPUT_CANCEL
};
var TOUCH_TARGET_EVENTS = "touchstart touchmove touchend touchcancel";
var TouchInput = function(_Input) {
  _inheritsLoose(TouchInput2, _Input);
  function TouchInput2() {
    var _this;
    TouchInput2.prototype.evTarget = TOUCH_TARGET_EVENTS;
    _this = _Input.apply(this, arguments) || this;
    _this.targetIds = {};
    return _this;
  }
  var _proto = TouchInput2.prototype;
  _proto.handler = function handler(ev) {
    var type = TOUCH_INPUT_MAP[ev.type];
    var touches = getTouches.call(this, ev, type);
    if (!touches) {
      return;
    }
    this.callback(this.manager, type, {
      pointers: touches[0],
      changedPointers: touches[1],
      pointerType: INPUT_TYPE_TOUCH,
      srcEvent: ev
    });
  };
  return TouchInput2;
}(Input);
function getTouches(ev, type) {
  var allTouches = toArray(ev.touches);
  var targetIds = this.targetIds;
  if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
    targetIds[allTouches[0].identifier] = true;
    return [allTouches, allTouches];
  }
  var i;
  var targetTouches;
  var changedTouches = toArray(ev.changedTouches);
  var changedTargetTouches = [];
  var target = this.target;
  targetTouches = allTouches.filter(function(touch) {
    return hasParent(touch.target, target);
  });
  if (type === INPUT_START) {
    i = 0;
    while (i < targetTouches.length) {
      targetIds[targetTouches[i].identifier] = true;
      i++;
    }
  }
  i = 0;
  while (i < changedTouches.length) {
    if (targetIds[changedTouches[i].identifier]) {
      changedTargetTouches.push(changedTouches[i]);
    }
    if (type & (INPUT_END | INPUT_CANCEL)) {
      delete targetIds[changedTouches[i].identifier];
    }
    i++;
  }
  if (!changedTargetTouches.length) {
    return;
  }
  return [
    // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
    uniqueArray(targetTouches.concat(changedTargetTouches), "identifier", true),
    changedTargetTouches
  ];
}
var MOUSE_INPUT_MAP = {
  mousedown: INPUT_START,
  mousemove: INPUT_MOVE,
  mouseup: INPUT_END
};
var MOUSE_ELEMENT_EVENTS = "mousedown";
var MOUSE_WINDOW_EVENTS = "mousemove mouseup";
var MouseInput = function(_Input) {
  _inheritsLoose(MouseInput2, _Input);
  function MouseInput2() {
    var _this;
    var proto = MouseInput2.prototype;
    proto.evEl = MOUSE_ELEMENT_EVENTS;
    proto.evWin = MOUSE_WINDOW_EVENTS;
    _this = _Input.apply(this, arguments) || this;
    _this.pressed = false;
    return _this;
  }
  var _proto = MouseInput2.prototype;
  _proto.handler = function handler(ev) {
    var eventType = MOUSE_INPUT_MAP[ev.type];
    if (eventType & INPUT_START && ev.button === 0) {
      this.pressed = true;
    }
    if (eventType & INPUT_MOVE && ev.which !== 1) {
      eventType = INPUT_END;
    }
    if (!this.pressed) {
      return;
    }
    if (eventType & INPUT_END) {
      this.pressed = false;
    }
    this.callback(this.manager, eventType, {
      pointers: [ev],
      changedPointers: [ev],
      pointerType: INPUT_TYPE_MOUSE,
      srcEvent: ev
    });
  };
  return MouseInput2;
}(Input);
var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;
function setLastTouch(eventData) {
  var _eventData$changedPoi = eventData.changedPointers, touch = _eventData$changedPoi[0];
  if (touch.identifier === this.primaryTouch) {
    var lastTouch = {
      x: touch.clientX,
      y: touch.clientY
    };
    var lts = this.lastTouches;
    this.lastTouches.push(lastTouch);
    var removeLastTouch = function removeLastTouch2() {
      var i = lts.indexOf(lastTouch);
      if (i > -1) {
        lts.splice(i, 1);
      }
    };
    setTimeout(removeLastTouch, DEDUP_TIMEOUT);
  }
}
function recordTouches(eventType, eventData) {
  if (eventType & INPUT_START) {
    this.primaryTouch = eventData.changedPointers[0].identifier;
    setLastTouch.call(this, eventData);
  } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
    setLastTouch.call(this, eventData);
  }
}
function isSyntheticEvent(eventData) {
  var x = eventData.srcEvent.clientX;
  var y = eventData.srcEvent.clientY;
  for (var i = 0; i < this.lastTouches.length; i++) {
    var t = this.lastTouches[i];
    var dx = Math.abs(x - t.x);
    var dy = Math.abs(y - t.y);
    if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
      return true;
    }
  }
  return false;
}
var TouchMouseInput = function() {
  var TouchMouseInput2 = function(_Input) {
    _inheritsLoose(TouchMouseInput3, _Input);
    function TouchMouseInput3(_manager, callback) {
      var _this;
      _this = _Input.call(this, _manager, callback) || this;
      _this.handler = function(manager, inputEvent, inputData) {
        var isTouch = inputData.pointerType === INPUT_TYPE_TOUCH;
        var isMouse = inputData.pointerType === INPUT_TYPE_MOUSE;
        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
          return;
        }
        if (isTouch) {
          recordTouches.call(_assertThisInitialized$1(_assertThisInitialized$1(_this)), inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(_assertThisInitialized$1(_assertThisInitialized$1(_this)), inputData)) {
          return;
        }
        _this.callback(manager, inputEvent, inputData);
      };
      _this.touch = new TouchInput(_this.manager, _this.handler);
      _this.mouse = new MouseInput(_this.manager, _this.handler);
      _this.primaryTouch = null;
      _this.lastTouches = [];
      return _this;
    }
    var _proto = TouchMouseInput3.prototype;
    _proto.destroy = function destroy() {
      this.touch.destroy();
      this.mouse.destroy();
    };
    return TouchMouseInput3;
  }(Input);
  return TouchMouseInput2;
}();
function createInputInstance(manager) {
  var Type;
  var inputClass = manager.options.inputClass;
  if (inputClass) {
    Type = inputClass;
  } else if (SUPPORT_POINTER_EVENTS) {
    Type = PointerEventInput;
  } else if (SUPPORT_ONLY_TOUCH) {
    Type = TouchInput;
  } else if (!SUPPORT_TOUCH) {
    Type = MouseInput;
  } else {
    Type = TouchMouseInput;
  }
  return new Type(manager, inputHandler);
}
function invokeArrayArg(arg, fn, context) {
  if (Array.isArray(arg)) {
    each(arg, context[fn], context);
    return true;
  }
  return false;
}
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;
var _uniqueId = 1;
function uniqueId() {
  return _uniqueId++;
}
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
  var manager = recognizer.manager;
  if (manager) {
    return manager.get(otherRecognizer);
  }
  return otherRecognizer;
}
function stateStr(state) {
  if (state & STATE_CANCELLED) {
    return "cancel";
  } else if (state & STATE_ENDED) {
    return "end";
  } else if (state & STATE_CHANGED) {
    return "move";
  } else if (state & STATE_BEGAN) {
    return "start";
  }
  return "";
}
var Recognizer = function() {
  function Recognizer2(options) {
    if (options === void 0) {
      options = {};
    }
    this.options = _extends({
      enable: true
    }, options);
    this.id = uniqueId();
    this.manager = null;
    this.state = STATE_POSSIBLE;
    this.simultaneous = {};
    this.requireFail = [];
  }
  var _proto = Recognizer2.prototype;
  _proto.set = function set2(options) {
    assign$1(this.options, options);
    this.manager && this.manager.touchAction.update();
    return this;
  };
  _proto.recognizeWith = function recognizeWith(otherRecognizer) {
    if (invokeArrayArg(otherRecognizer, "recognizeWith", this)) {
      return this;
    }
    var simultaneous = this.simultaneous;
    otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
    if (!simultaneous[otherRecognizer.id]) {
      simultaneous[otherRecognizer.id] = otherRecognizer;
      otherRecognizer.recognizeWith(this);
    }
    return this;
  };
  _proto.dropRecognizeWith = function dropRecognizeWith(otherRecognizer) {
    if (invokeArrayArg(otherRecognizer, "dropRecognizeWith", this)) {
      return this;
    }
    otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
    delete this.simultaneous[otherRecognizer.id];
    return this;
  };
  _proto.requireFailure = function requireFailure(otherRecognizer) {
    if (invokeArrayArg(otherRecognizer, "requireFailure", this)) {
      return this;
    }
    var requireFail = this.requireFail;
    otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
    if (inArray(requireFail, otherRecognizer) === -1) {
      requireFail.push(otherRecognizer);
      otherRecognizer.requireFailure(this);
    }
    return this;
  };
  _proto.dropRequireFailure = function dropRequireFailure(otherRecognizer) {
    if (invokeArrayArg(otherRecognizer, "dropRequireFailure", this)) {
      return this;
    }
    otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
    var index = inArray(this.requireFail, otherRecognizer);
    if (index > -1) {
      this.requireFail.splice(index, 1);
    }
    return this;
  };
  _proto.hasRequireFailures = function hasRequireFailures() {
    return this.requireFail.length > 0;
  };
  _proto.canRecognizeWith = function canRecognizeWith(otherRecognizer) {
    return !!this.simultaneous[otherRecognizer.id];
  };
  _proto.emit = function emit(input) {
    var self2 = this;
    var state = this.state;
    function emit2(event) {
      self2.manager.emit(event, input);
    }
    if (state < STATE_ENDED) {
      emit2(self2.options.event + stateStr(state));
    }
    emit2(self2.options.event);
    if (input.additionalEvent) {
      emit2(input.additionalEvent);
    }
    if (state >= STATE_ENDED) {
      emit2(self2.options.event + stateStr(state));
    }
  };
  _proto.tryEmit = function tryEmit(input) {
    if (this.canEmit()) {
      return this.emit(input);
    }
    this.state = STATE_FAILED;
  };
  _proto.canEmit = function canEmit() {
    var i = 0;
    while (i < this.requireFail.length) {
      if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
        return false;
      }
      i++;
    }
    return true;
  };
  _proto.recognize = function recognize(inputData) {
    var inputDataClone = assign$1({}, inputData);
    if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
      this.reset();
      this.state = STATE_FAILED;
      return;
    }
    if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
      this.state = STATE_POSSIBLE;
    }
    this.state = this.process(inputDataClone);
    if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
      this.tryEmit(inputDataClone);
    }
  };
  _proto.process = function process2(inputData) {
  };
  _proto.getTouchAction = function getTouchAction() {
  };
  _proto.reset = function reset() {
  };
  return Recognizer2;
}();
var TapRecognizer = function(_Recognizer) {
  _inheritsLoose(TapRecognizer2, _Recognizer);
  function TapRecognizer2(options) {
    var _this;
    if (options === void 0) {
      options = {};
    }
    _this = _Recognizer.call(this, _extends({
      event: "tap",
      pointers: 1,
      taps: 1,
      interval: 300,
      // max time between the multi-tap taps
      time: 250,
      // max time of the pointer to be down (like finger on the screen)
      threshold: 9,
      // a minimal movement is ok, but keep it low
      posThreshold: 10
    }, options)) || this;
    _this.pTime = false;
    _this.pCenter = false;
    _this._timer = null;
    _this._input = null;
    _this.count = 0;
    return _this;
  }
  var _proto = TapRecognizer2.prototype;
  _proto.getTouchAction = function getTouchAction() {
    return [TOUCH_ACTION_MANIPULATION];
  };
  _proto.process = function process2(input) {
    var _this2 = this;
    var options = this.options;
    var validPointers = input.pointers.length === options.pointers;
    var validMovement = input.distance < options.threshold;
    var validTouchTime = input.deltaTime < options.time;
    this.reset();
    if (input.eventType & INPUT_START && this.count === 0) {
      return this.failTimeout();
    }
    if (validMovement && validTouchTime && validPointers) {
      if (input.eventType !== INPUT_END) {
        return this.failTimeout();
      }
      var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
      var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
      this.pTime = input.timeStamp;
      this.pCenter = input.center;
      if (!validMultiTap || !validInterval) {
        this.count = 1;
      } else {
        this.count += 1;
      }
      this._input = input;
      var tapCount = this.count % options.taps;
      if (tapCount === 0) {
        if (!this.hasRequireFailures()) {
          return STATE_RECOGNIZED;
        } else {
          this._timer = setTimeout(function() {
            _this2.state = STATE_RECOGNIZED;
            _this2.tryEmit();
          }, options.interval);
          return STATE_BEGAN;
        }
      }
    }
    return STATE_FAILED;
  };
  _proto.failTimeout = function failTimeout() {
    var _this3 = this;
    this._timer = setTimeout(function() {
      _this3.state = STATE_FAILED;
    }, this.options.interval);
    return STATE_FAILED;
  };
  _proto.reset = function reset() {
    clearTimeout(this._timer);
  };
  _proto.emit = function emit() {
    if (this.state === STATE_RECOGNIZED) {
      this._input.tapCount = this.count;
      this.manager.emit(this.options.event, this._input);
    }
  };
  return TapRecognizer2;
}(Recognizer);
var AttrRecognizer = function(_Recognizer) {
  _inheritsLoose(AttrRecognizer2, _Recognizer);
  function AttrRecognizer2(options) {
    if (options === void 0) {
      options = {};
    }
    return _Recognizer.call(this, _extends({
      pointers: 1
    }, options)) || this;
  }
  var _proto = AttrRecognizer2.prototype;
  _proto.attrTest = function attrTest(input) {
    var optionPointers = this.options.pointers;
    return optionPointers === 0 || input.pointers.length === optionPointers;
  };
  _proto.process = function process2(input) {
    var state = this.state;
    var eventType = input.eventType;
    var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
    var isValid = this.attrTest(input);
    if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
      return state | STATE_CANCELLED;
    } else if (isRecognized || isValid) {
      if (eventType & INPUT_END) {
        return state | STATE_ENDED;
      } else if (!(state & STATE_BEGAN)) {
        return STATE_BEGAN;
      }
      return state | STATE_CHANGED;
    }
    return STATE_FAILED;
  };
  return AttrRecognizer2;
}(Recognizer);
function directionStr(direction) {
  if (direction === DIRECTION_DOWN) {
    return "down";
  } else if (direction === DIRECTION_UP) {
    return "up";
  } else if (direction === DIRECTION_LEFT) {
    return "left";
  } else if (direction === DIRECTION_RIGHT) {
    return "right";
  }
  return "";
}
var PanRecognizer = function(_AttrRecognizer) {
  _inheritsLoose(PanRecognizer2, _AttrRecognizer);
  function PanRecognizer2(options) {
    var _this;
    if (options === void 0) {
      options = {};
    }
    _this = _AttrRecognizer.call(this, _extends({
      event: "pan",
      threshold: 10,
      pointers: 1,
      direction: DIRECTION_ALL
    }, options)) || this;
    _this.pX = null;
    _this.pY = null;
    return _this;
  }
  var _proto = PanRecognizer2.prototype;
  _proto.getTouchAction = function getTouchAction() {
    var direction = this.options.direction;
    var actions = [];
    if (direction & DIRECTION_HORIZONTAL) {
      actions.push(TOUCH_ACTION_PAN_Y);
    }
    if (direction & DIRECTION_VERTICAL) {
      actions.push(TOUCH_ACTION_PAN_X);
    }
    return actions;
  };
  _proto.directionTest = function directionTest(input) {
    var options = this.options;
    var hasMoved = true;
    var distance = input.distance;
    var direction = input.direction;
    var x = input.deltaX;
    var y = input.deltaY;
    if (!(direction & options.direction)) {
      if (options.direction & DIRECTION_HORIZONTAL) {
        direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
        hasMoved = x !== this.pX;
        distance = Math.abs(input.deltaX);
      } else {
        direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
        hasMoved = y !== this.pY;
        distance = Math.abs(input.deltaY);
      }
    }
    input.direction = direction;
    return hasMoved && distance > options.threshold && direction & options.direction;
  };
  _proto.attrTest = function attrTest(input) {
    return AttrRecognizer.prototype.attrTest.call(this, input) && // replace with a super call
    (this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
  };
  _proto.emit = function emit(input) {
    this.pX = input.deltaX;
    this.pY = input.deltaY;
    var direction = directionStr(input.direction);
    if (direction) {
      input.additionalEvent = this.options.event + direction;
    }
    _AttrRecognizer.prototype.emit.call(this, input);
  };
  return PanRecognizer2;
}(AttrRecognizer);
var SwipeRecognizer = function(_AttrRecognizer) {
  _inheritsLoose(SwipeRecognizer2, _AttrRecognizer);
  function SwipeRecognizer2(options) {
    if (options === void 0) {
      options = {};
    }
    return _AttrRecognizer.call(this, _extends({
      event: "swipe",
      threshold: 10,
      velocity: 0.3,
      direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
      pointers: 1
    }, options)) || this;
  }
  var _proto = SwipeRecognizer2.prototype;
  _proto.getTouchAction = function getTouchAction() {
    return PanRecognizer.prototype.getTouchAction.call(this);
  };
  _proto.attrTest = function attrTest(input) {
    var direction = this.options.direction;
    var velocity;
    if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
      velocity = input.overallVelocity;
    } else if (direction & DIRECTION_HORIZONTAL) {
      velocity = input.overallVelocityX;
    } else if (direction & DIRECTION_VERTICAL) {
      velocity = input.overallVelocityY;
    }
    return _AttrRecognizer.prototype.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers === this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
  };
  _proto.emit = function emit(input) {
    var direction = directionStr(input.offsetDirection);
    if (direction) {
      this.manager.emit(this.options.event + direction, input);
    }
    this.manager.emit(this.options.event, input);
  };
  return SwipeRecognizer2;
}(AttrRecognizer);
var PinchRecognizer = function(_AttrRecognizer) {
  _inheritsLoose(PinchRecognizer2, _AttrRecognizer);
  function PinchRecognizer2(options) {
    if (options === void 0) {
      options = {};
    }
    return _AttrRecognizer.call(this, _extends({
      event: "pinch",
      threshold: 0,
      pointers: 2
    }, options)) || this;
  }
  var _proto = PinchRecognizer2.prototype;
  _proto.getTouchAction = function getTouchAction() {
    return [TOUCH_ACTION_NONE];
  };
  _proto.attrTest = function attrTest(input) {
    return _AttrRecognizer.prototype.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
  };
  _proto.emit = function emit(input) {
    if (input.scale !== 1) {
      var inOut = input.scale < 1 ? "in" : "out";
      input.additionalEvent = this.options.event + inOut;
    }
    _AttrRecognizer.prototype.emit.call(this, input);
  };
  return PinchRecognizer2;
}(AttrRecognizer);
var RotateRecognizer = function(_AttrRecognizer) {
  _inheritsLoose(RotateRecognizer2, _AttrRecognizer);
  function RotateRecognizer2(options) {
    if (options === void 0) {
      options = {};
    }
    return _AttrRecognizer.call(this, _extends({
      event: "rotate",
      threshold: 0,
      pointers: 2
    }, options)) || this;
  }
  var _proto = RotateRecognizer2.prototype;
  _proto.getTouchAction = function getTouchAction() {
    return [TOUCH_ACTION_NONE];
  };
  _proto.attrTest = function attrTest(input) {
    return _AttrRecognizer.prototype.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
  };
  return RotateRecognizer2;
}(AttrRecognizer);
var PressRecognizer = function(_Recognizer) {
  _inheritsLoose(PressRecognizer2, _Recognizer);
  function PressRecognizer2(options) {
    var _this;
    if (options === void 0) {
      options = {};
    }
    _this = _Recognizer.call(this, _extends({
      event: "press",
      pointers: 1,
      time: 251,
      // minimal time of the pointer to be pressed
      threshold: 9
    }, options)) || this;
    _this._timer = null;
    _this._input = null;
    return _this;
  }
  var _proto = PressRecognizer2.prototype;
  _proto.getTouchAction = function getTouchAction() {
    return [TOUCH_ACTION_AUTO];
  };
  _proto.process = function process2(input) {
    var _this2 = this;
    var options = this.options;
    var validPointers = input.pointers.length === options.pointers;
    var validMovement = input.distance < options.threshold;
    var validTime = input.deltaTime > options.time;
    this._input = input;
    if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) {
      this.reset();
    } else if (input.eventType & INPUT_START) {
      this.reset();
      this._timer = setTimeout(function() {
        _this2.state = STATE_RECOGNIZED;
        _this2.tryEmit();
      }, options.time);
    } else if (input.eventType & INPUT_END) {
      return STATE_RECOGNIZED;
    }
    return STATE_FAILED;
  };
  _proto.reset = function reset() {
    clearTimeout(this._timer);
  };
  _proto.emit = function emit(input) {
    if (this.state !== STATE_RECOGNIZED) {
      return;
    }
    if (input && input.eventType & INPUT_END) {
      this.manager.emit(this.options.event + "up", input);
    } else {
      this._input.timeStamp = now();
      this.manager.emit(this.options.event, this._input);
    }
  };
  return PressRecognizer2;
}(Recognizer);
var defaults = {
  /**
   * @private
   * set if DOM events are being triggered.
   * But this is slower and unused by simple implementations, so disabled by default.
   * @type {Boolean}
   * @default false
   */
  domEvents: false,
  /**
   * @private
   * The value for the touchAction property/fallback.
   * When set to `compute` it will magically set the correct value based on the added recognizers.
   * @type {String}
   * @default compute
   */
  touchAction: TOUCH_ACTION_COMPUTE,
  /**
   * @private
   * @type {Boolean}
   * @default true
   */
  enable: true,
  /**
   * @private
   * EXPERIMENTAL FEATURE -- can be removed/changed
   * Change the parent input target element.
   * If Null, then it is being set the to main element.
   * @type {Null|EventTarget}
   * @default null
   */
  inputTarget: null,
  /**
   * @private
   * force an input class
   * @type {Null|Function}
   * @default null
   */
  inputClass: null,
  /**
   * @private
   * Some CSS properties can be used to improve the working of Hammer.
   * Add them to this method and they will be set when creating a new Manager.
   * @namespace
   */
  cssProps: {
    /**
     * @private
     * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
     * @type {String}
     * @default 'none'
     */
    userSelect: "none",
    /**
     * @private
     * Disable the Windows Phone grippers when pressing an element.
     * @type {String}
     * @default 'none'
     */
    touchSelect: "none",
    /**
     * @private
     * Disables the default callout shown when you touch and hold a touch target.
     * On iOS, when you touch and hold a touch target such as a link, Safari displays
     * a callout containing information about the link. This property allows you to disable that callout.
     * @type {String}
     * @default 'none'
     */
    touchCallout: "none",
    /**
     * @private
     * Specifies whether zooming is enabled. Used by IE10>
     * @type {String}
     * @default 'none'
     */
    contentZooming: "none",
    /**
     * @private
     * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
     * @type {String}
     * @default 'none'
     */
    userDrag: "none",
    /**
     * @private
     * Overrides the highlight color shown when the user taps a link or a JavaScript
     * clickable element in iOS. This property obeys the alpha value, if specified.
     * @type {String}
     * @default 'rgba(0,0,0,0)'
     */
    tapHighlightColor: "rgba(0,0,0,0)"
  }
};
var preset = [[RotateRecognizer, {
  enable: false
}], [PinchRecognizer, {
  enable: false
}, ["rotate"]], [SwipeRecognizer, {
  direction: DIRECTION_HORIZONTAL
}], [PanRecognizer, {
  direction: DIRECTION_HORIZONTAL
}, ["swipe"]], [TapRecognizer], [TapRecognizer, {
  event: "doubletap",
  taps: 2
}, ["tap"]], [PressRecognizer]];
var STOP = 1;
var FORCED_STOP = 2;
function toggleCssProps(manager, add) {
  var element = manager.element;
  if (!element.style) {
    return;
  }
  var prop;
  each(manager.options.cssProps, function(value, name) {
    prop = prefixed(element.style, name);
    if (add) {
      manager.oldCssProps[prop] = element.style[prop];
      element.style[prop] = value;
    } else {
      element.style[prop] = manager.oldCssProps[prop] || "";
    }
  });
  if (!add) {
    manager.oldCssProps = {};
  }
}
function triggerDomEvent(event, data2) {
  var gestureEvent = document.createEvent("Event");
  gestureEvent.initEvent(event, true, true);
  gestureEvent.gesture = data2;
  data2.target.dispatchEvent(gestureEvent);
}
var Manager = function() {
  function Manager2(element, options) {
    var _this = this;
    this.options = assign$1({}, defaults, options || {});
    this.options.inputTarget = this.options.inputTarget || element;
    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};
    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);
    toggleCssProps(this, true);
    each(this.options.recognizers, function(item) {
      var recognizer = _this.add(new item[0](item[1]));
      item[2] && recognizer.recognizeWith(item[2]);
      item[3] && recognizer.requireFailure(item[3]);
    }, this);
  }
  var _proto = Manager2.prototype;
  _proto.set = function set2(options) {
    assign$1(this.options, options);
    if (options.touchAction) {
      this.touchAction.update();
    }
    if (options.inputTarget) {
      this.input.destroy();
      this.input.target = options.inputTarget;
      this.input.init();
    }
    return this;
  };
  _proto.stop = function stop(force) {
    this.session.stopped = force ? FORCED_STOP : STOP;
  };
  _proto.recognize = function recognize(inputData) {
    var session = this.session;
    if (session.stopped) {
      return;
    }
    this.touchAction.preventDefaults(inputData);
    var recognizer;
    var recognizers = this.recognizers;
    var curRecognizer = session.curRecognizer;
    if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) {
      session.curRecognizer = null;
      curRecognizer = null;
    }
    var i = 0;
    while (i < recognizers.length) {
      recognizer = recognizers[i];
      if (session.stopped !== FORCED_STOP && // 1
      (!curRecognizer || recognizer === curRecognizer || // 2
      recognizer.canRecognizeWith(curRecognizer))) {
        recognizer.recognize(inputData);
      } else {
        recognizer.reset();
      }
      if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
        session.curRecognizer = recognizer;
        curRecognizer = recognizer;
      }
      i++;
    }
  };
  _proto.get = function get2(recognizer) {
    if (recognizer instanceof Recognizer) {
      return recognizer;
    }
    var recognizers = this.recognizers;
    for (var i = 0; i < recognizers.length; i++) {
      if (recognizers[i].options.event === recognizer) {
        return recognizers[i];
      }
    }
    return null;
  };
  _proto.add = function add(recognizer) {
    if (invokeArrayArg(recognizer, "add", this)) {
      return this;
    }
    var existing = this.get(recognizer.options.event);
    if (existing) {
      this.remove(existing);
    }
    this.recognizers.push(recognizer);
    recognizer.manager = this;
    this.touchAction.update();
    return recognizer;
  };
  _proto.remove = function remove(recognizer) {
    if (invokeArrayArg(recognizer, "remove", this)) {
      return this;
    }
    var targetRecognizer = this.get(recognizer);
    if (recognizer) {
      var recognizers = this.recognizers;
      var index = inArray(recognizers, targetRecognizer);
      if (index !== -1) {
        recognizers.splice(index, 1);
        this.touchAction.update();
      }
    }
    return this;
  };
  _proto.on = function on(events, handler) {
    if (events === void 0 || handler === void 0) {
      return this;
    }
    var handlers = this.handlers;
    each(splitStr(events), function(event) {
      handlers[event] = handlers[event] || [];
      handlers[event].push(handler);
    });
    return this;
  };
  _proto.off = function off(events, handler) {
    if (events === void 0) {
      return this;
    }
    var handlers = this.handlers;
    each(splitStr(events), function(event) {
      if (!handler) {
        delete handlers[event];
      } else {
        handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
      }
    });
    return this;
  };
  _proto.emit = function emit(event, data2) {
    if (this.options.domEvents) {
      triggerDomEvent(event, data2);
    }
    var handlers = this.handlers[event] && this.handlers[event].slice();
    if (!handlers || !handlers.length) {
      return;
    }
    data2.type = event;
    data2.preventDefault = function() {
      data2.srcEvent.preventDefault();
    };
    var i = 0;
    while (i < handlers.length) {
      handlers[i](data2);
      i++;
    }
  };
  _proto.destroy = function destroy() {
    this.element && toggleCssProps(this, false);
    this.handlers = {};
    this.session = {};
    this.input.destroy();
    this.element = null;
  };
  return Manager2;
}();
var SINGLE_TOUCH_INPUT_MAP = {
  touchstart: INPUT_START,
  touchmove: INPUT_MOVE,
  touchend: INPUT_END,
  touchcancel: INPUT_CANCEL
};
var SINGLE_TOUCH_TARGET_EVENTS = "touchstart";
var SINGLE_TOUCH_WINDOW_EVENTS = "touchstart touchmove touchend touchcancel";
var SingleTouchInput = function(_Input) {
  _inheritsLoose(SingleTouchInput2, _Input);
  function SingleTouchInput2() {
    var _this;
    var proto = SingleTouchInput2.prototype;
    proto.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    proto.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    _this = _Input.apply(this, arguments) || this;
    _this.started = false;
    return _this;
  }
  var _proto = SingleTouchInput2.prototype;
  _proto.handler = function handler(ev) {
    var type = SINGLE_TOUCH_INPUT_MAP[ev.type];
    if (type === INPUT_START) {
      this.started = true;
    }
    if (!this.started) {
      return;
    }
    var touches = normalizeSingleTouches.call(this, ev, type);
    if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
      this.started = false;
    }
    this.callback(this.manager, type, {
      pointers: touches[0],
      changedPointers: touches[1],
      pointerType: INPUT_TYPE_TOUCH,
      srcEvent: ev
    });
  };
  return SingleTouchInput2;
}(Input);
function normalizeSingleTouches(ev, type) {
  var all2 = toArray(ev.touches);
  var changed = toArray(ev.changedTouches);
  if (type & (INPUT_END | INPUT_CANCEL)) {
    all2 = uniqueArray(all2.concat(changed), "identifier", true);
  }
  return [all2, changed];
}
function deprecate(method2, name, message) {
  var deprecationMessage = "DEPRECATED METHOD: " + name + "\n" + message + " AT \n";
  return function() {
    var e = new Error("get-stack-trace");
    var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace";
    var log = window.console && (window.console.warn || window.console.log);
    if (log) {
      log.call(window.console, deprecationMessage, stack);
    }
    return method2.apply(this, arguments);
  };
}
var extend = deprecate(function(dest, src, merge2) {
  var keys4 = Object.keys(src);
  var i = 0;
  while (i < keys4.length) {
    if (!merge2 || merge2 && dest[keys4[i]] === void 0) {
      dest[keys4[i]] = src[keys4[i]];
    }
    i++;
  }
  return dest;
}, "extend", "Use `assign`.");
var merge$1 = deprecate(function(dest, src) {
  return extend(dest, src, true);
}, "merge", "Use `assign`.");
function inherit(child, base, properties) {
  var baseP = base.prototype;
  var childP;
  childP = child.prototype = Object.create(baseP);
  childP.constructor = child;
  childP._super = baseP;
  if (properties) {
    assign$1(childP, properties);
  }
}
function bindFn(fn, context) {
  return function boundFn() {
    return fn.apply(context, arguments);
  };
}
var Hammer = function() {
  var Hammer2 = (
    /**
      * @private
      * @const {string}
      */
    function Hammer3(element, options) {
      if (options === void 0) {
        options = {};
      }
      return new Manager(element, _extends({
        recognizers: preset.concat()
      }, options));
    }
  );
  Hammer2.VERSION = "2.0.17-rc";
  Hammer2.DIRECTION_ALL = DIRECTION_ALL;
  Hammer2.DIRECTION_DOWN = DIRECTION_DOWN;
  Hammer2.DIRECTION_LEFT = DIRECTION_LEFT;
  Hammer2.DIRECTION_RIGHT = DIRECTION_RIGHT;
  Hammer2.DIRECTION_UP = DIRECTION_UP;
  Hammer2.DIRECTION_HORIZONTAL = DIRECTION_HORIZONTAL;
  Hammer2.DIRECTION_VERTICAL = DIRECTION_VERTICAL;
  Hammer2.DIRECTION_NONE = DIRECTION_NONE;
  Hammer2.DIRECTION_DOWN = DIRECTION_DOWN;
  Hammer2.INPUT_START = INPUT_START;
  Hammer2.INPUT_MOVE = INPUT_MOVE;
  Hammer2.INPUT_END = INPUT_END;
  Hammer2.INPUT_CANCEL = INPUT_CANCEL;
  Hammer2.STATE_POSSIBLE = STATE_POSSIBLE;
  Hammer2.STATE_BEGAN = STATE_BEGAN;
  Hammer2.STATE_CHANGED = STATE_CHANGED;
  Hammer2.STATE_ENDED = STATE_ENDED;
  Hammer2.STATE_RECOGNIZED = STATE_RECOGNIZED;
  Hammer2.STATE_CANCELLED = STATE_CANCELLED;
  Hammer2.STATE_FAILED = STATE_FAILED;
  Hammer2.Manager = Manager;
  Hammer2.Input = Input;
  Hammer2.TouchAction = TouchAction;
  Hammer2.TouchInput = TouchInput;
  Hammer2.MouseInput = MouseInput;
  Hammer2.PointerEventInput = PointerEventInput;
  Hammer2.TouchMouseInput = TouchMouseInput;
  Hammer2.SingleTouchInput = SingleTouchInput;
  Hammer2.Recognizer = Recognizer;
  Hammer2.AttrRecognizer = AttrRecognizer;
  Hammer2.Tap = TapRecognizer;
  Hammer2.Pan = PanRecognizer;
  Hammer2.Swipe = SwipeRecognizer;
  Hammer2.Pinch = PinchRecognizer;
  Hammer2.Rotate = RotateRecognizer;
  Hammer2.Press = PressRecognizer;
  Hammer2.on = addEventListeners;
  Hammer2.off = removeEventListeners;
  Hammer2.each = each;
  Hammer2.merge = merge$1;
  Hammer2.extend = extend;
  Hammer2.bindFn = bindFn;
  Hammer2.assign = assign$1;
  Hammer2.inherit = inherit;
  Hammer2.bindFn = bindFn;
  Hammer2.prefixed = prefixed;
  Hammer2.toArray = toArray;
  Hammer2.inArray = inArray;
  Hammer2.uniqueArray = uniqueArray;
  Hammer2.splitStr = splitStr;
  Hammer2.boolOrFn = boolOrFn;
  Hammer2.hasParent = hasParent;
  Hammer2.addEventListeners = addEventListeners;
  Hammer2.removeEventListeners = removeEventListeners;
  Hammer2.defaults = assign$1({}, defaults, {
    preset
  });
  return Hammer2;
}();
var RealHammer = Hammer;
function _createForOfIteratorHelper$3(o, allowArrayLike) {
  var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"];
  if (!it) {
    if (_Array$isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray$3(o, minLen) {
  var _context15;
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$3(o, minLen);
  var n = _sliceInstanceProperty(_context15 = Object.prototype.toString.call(o)).call(_context15, 8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return _Array$from$1(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$3(o, minLen);
}
function _arrayLikeToArray$3(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var DELETE = _Symbol("DELETE");
function pureDeepObjectAssign(base) {
  var _context;
  for (var _len = arguments.length, updates = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    updates[_key - 1] = arguments[_key];
  }
  return deepObjectAssign.apply(void 0, _concatInstanceProperty(_context = [{}, base]).call(_context, updates));
}
function deepObjectAssign() {
  var merged = deepObjectAssignNonentry.apply(void 0, arguments);
  stripDelete(merged);
  return merged;
}
function deepObjectAssignNonentry() {
  for (var _len2 = arguments.length, values2 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    values2[_key2] = arguments[_key2];
  }
  if (values2.length < 2) {
    return values2[0];
  } else if (values2.length > 2) {
    var _context2;
    return deepObjectAssignNonentry.apply(void 0, _concatInstanceProperty(_context2 = [deepObjectAssign(values2[0], values2[1])]).call(_context2, _toConsumableArray(_sliceInstanceProperty(values2).call(values2, 2))));
  }
  var a = values2[0];
  var b = values2[1];
  if (a instanceof Date && b instanceof Date) {
    a.setTime(b.getTime());
    return a;
  }
  var _iterator = _createForOfIteratorHelper$3(_Reflect$ownKeys(b)), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var prop = _step.value;
      if (!Object.prototype.propertyIsEnumerable.call(b, prop))
        ;
      else if (b[prop] === DELETE) {
        delete a[prop];
      } else if (a[prop] !== null && b[prop] !== null && typeof a[prop] === "object" && typeof b[prop] === "object" && !_Array$isArray(a[prop]) && !_Array$isArray(b[prop])) {
        a[prop] = deepObjectAssignNonentry(a[prop], b[prop]);
      } else {
        a[prop] = clone(b[prop]);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return a;
}
function clone(a) {
  if (_Array$isArray(a)) {
    return _mapInstanceProperty(a).call(a, function(value) {
      return clone(value);
    });
  } else if (typeof a === "object" && a !== null) {
    if (a instanceof Date) {
      return new Date(a.getTime());
    }
    return deepObjectAssignNonentry({}, a);
  } else {
    return a;
  }
}
function stripDelete(a) {
  for (var _i = 0, _Object$keys$1 = _Object$keys(a); _i < _Object$keys$1.length; _i++) {
    var prop = _Object$keys$1[_i];
    if (a[prop] === DELETE) {
      delete a[prop];
    } else if (typeof a[prop] === "object" && a[prop] !== null) {
      stripDelete(a[prop]);
    }
  }
}
function hammerMock() {
  var noop2 = function noop3() {
  };
  return {
    on: noop2,
    off: noop2,
    destroy: noop2,
    emit: noop2,
    get() {
      return {
        set: noop2
      };
    }
  };
}
var Hammer$1 = typeof window !== "undefined" ? window.Hammer || RealHammer : function() {
  return hammerMock();
};
function Activator$1(container) {
  var _this = this, _context3;
  this._cleanupQueue = [];
  this.active = false;
  this._dom = {
    container,
    overlay: document.createElement("div")
  };
  this._dom.overlay.classList.add("vis-overlay");
  this._dom.container.appendChild(this._dom.overlay);
  this._cleanupQueue.push(function() {
    _this._dom.overlay.parentNode.removeChild(_this._dom.overlay);
  });
  var hammer = Hammer$1(this._dom.overlay);
  hammer.on("tap", _bindInstanceProperty$1(_context3 = this._onTapOverlay).call(_context3, this));
  this._cleanupQueue.push(function() {
    hammer.destroy();
  });
  var events = ["tap", "doubletap", "press", "pinch", "pan", "panstart", "panmove", "panend"];
  _forEachInstanceProperty(events).call(events, function(event) {
    hammer.on(event, function(event2) {
      event2.srcEvent.stopPropagation();
    });
  });
  if (document && document.body) {
    this._onClick = function(event) {
      if (!_hasParent(event.target, container)) {
        _this.deactivate();
      }
    };
    document.body.addEventListener("click", this._onClick);
    this._cleanupQueue.push(function() {
      document.body.removeEventListener("click", _this._onClick);
    });
  }
  this._escListener = function(event) {
    if ("key" in event ? event.key === "Escape" : event.keyCode === 27) {
      _this.deactivate();
    }
  };
}
Emitter(Activator$1.prototype);
Activator$1.current = null;
Activator$1.prototype.destroy = function() {
  var _context4, _context5;
  this.deactivate();
  var _iterator2 = _createForOfIteratorHelper$3(_reverseInstanceProperty(_context4 = _spliceInstanceProperty(_context5 = this._cleanupQueue).call(_context5, 0)).call(_context4)), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var callback = _step2.value;
      callback();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};
Activator$1.prototype.activate = function() {
  if (Activator$1.current) {
    Activator$1.current.deactivate();
  }
  Activator$1.current = this;
  this.active = true;
  this._dom.overlay.style.display = "none";
  this._dom.container.classList.add("vis-active");
  this.emit("change");
  this.emit("activate");
  document.body.addEventListener("keydown", this._escListener);
};
Activator$1.prototype.deactivate = function() {
  this.active = false;
  this._dom.overlay.style.display = "block";
  this._dom.container.classList.remove("vis-active");
  document.body.removeEventListener("keydown", this._escListener);
  this.emit("change");
  this.emit("deactivate");
};
Activator$1.prototype._onTapOverlay = function(event) {
  this.activate();
  event.srcEvent.stopPropagation();
};
function _hasParent(element, parent2) {
  while (element) {
    if (element === parent2) {
      return true;
    }
    element = element.parentNode;
  }
  return false;
}
var isConstructor3 = isConstructor$4;
var tryToString$1 = tryToString$6;
var $TypeError$3 = TypeError;
var aConstructor$2 = function(argument) {
  if (isConstructor3(argument))
    return argument;
  throw new $TypeError$3(tryToString$1(argument) + " is not a constructor");
};
var $$k = _export;
var getBuiltIn$4 = getBuiltIn$f;
var apply$1 = functionApply;
var bind$8 = functionBind;
var aConstructor$1 = aConstructor$2;
var anObject$3 = anObject$d;
var isObject$6 = isObject$h;
var create$5 = objectCreate;
var fails$9 = fails$u;
var nativeConstruct = getBuiltIn$4("Reflect", "construct");
var ObjectPrototype = Object.prototype;
var push$2 = [].push;
var NEW_TARGET_BUG = fails$9(function() {
  function F() {
  }
  return !(nativeConstruct(function() {
  }, [], F) instanceof F);
});
var ARGS_BUG = !fails$9(function() {
  nativeConstruct(function() {
  });
});
var FORCED$2 = NEW_TARGET_BUG || ARGS_BUG;
$$k({ target: "Reflect", stat: true, forced: FORCED$2, sham: FORCED$2 }, {
  construct: function construct(Target, args) {
    aConstructor$1(Target);
    anObject$3(args);
    var newTarget = arguments.length < 3 ? Target : aConstructor$1(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG)
      return nativeConstruct(Target, args, newTarget);
    if (Target === newTarget) {
      switch (args.length) {
        case 0:
          return new Target();
        case 1:
          return new Target(args[0]);
        case 2:
          return new Target(args[0], args[1]);
        case 3:
          return new Target(args[0], args[1], args[2]);
        case 4:
          return new Target(args[0], args[1], args[2], args[3]);
      }
      var $args = [null];
      apply$1(push$2, $args, args);
      return new (apply$1(bind$8, Target, $args))();
    }
    var proto = newTarget.prototype;
    var instance = create$5(isObject$6(proto) ? proto : ObjectPrototype);
    var result = apply$1(Target, instance, args);
    return isObject$6(result) ? result : instance;
  }
});
var path$8 = path$o;
var construct$2 = path$8.Reflect.construct;
var parent$u = construct$2;
var construct$1 = parent$u;
var construct2 = construct$1;
var _Reflect$construct = getDefaultExportFromCjs(construct2);
var path$7 = path$o;
var getOwnPropertySymbols$2 = path$7.Object.getOwnPropertySymbols;
var parent$t = getOwnPropertySymbols$2;
var getOwnPropertySymbols$1 = parent$t;
var getOwnPropertySymbols2 = getOwnPropertySymbols$1;
var _Object$getOwnPropertySymbols = getDefaultExportFromCjs(getOwnPropertySymbols2);
var getOwnPropertyDescriptor$4 = { exports: {} };
var $$j = _export;
var fails$8 = fails$u;
var toIndexedObject$1 = toIndexedObject$a;
var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var DESCRIPTORS$5 = descriptors;
var FORCED$1 = !DESCRIPTORS$5 || fails$8(function() {
  nativeGetOwnPropertyDescriptor(1);
});
$$j({ target: "Object", stat: true, forced: FORCED$1, sham: !DESCRIPTORS$5 }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor3(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject$1(it), key);
  }
});
var path$6 = path$o;
var Object$2 = path$6.Object;
var getOwnPropertyDescriptor$3 = getOwnPropertyDescriptor$4.exports = function getOwnPropertyDescriptor4(it, key) {
  return Object$2.getOwnPropertyDescriptor(it, key);
};
if (Object$2.getOwnPropertyDescriptor.sham)
  getOwnPropertyDescriptor$3.sham = true;
var getOwnPropertyDescriptorExports = getOwnPropertyDescriptor$4.exports;
var parent$s = getOwnPropertyDescriptorExports;
var getOwnPropertyDescriptor$2 = parent$s;
var getOwnPropertyDescriptor$1 = getOwnPropertyDescriptor$2;
var _Object$getOwnPropertyDescriptor = getDefaultExportFromCjs(getOwnPropertyDescriptor$1);
var $$i = _export;
var DESCRIPTORS$4 = descriptors;
var ownKeys$2 = ownKeys$7;
var toIndexedObject = toIndexedObject$a;
var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
var createProperty = createProperty$6;
$$i({ target: "Object", stat: true, sham: !DESCRIPTORS$4 }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor6 = getOwnPropertyDescriptorModule$1.f;
    var keys4 = ownKeys$2(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys4.length > index) {
      descriptor = getOwnPropertyDescriptor6(O, key = keys4[index++]);
      if (descriptor !== void 0)
        createProperty(result, key, descriptor);
    }
    return result;
  }
});
var path$5 = path$o;
var getOwnPropertyDescriptors$2 = path$5.Object.getOwnPropertyDescriptors;
var parent$r = getOwnPropertyDescriptors$2;
var getOwnPropertyDescriptors$1 = parent$r;
var getOwnPropertyDescriptors2 = getOwnPropertyDescriptors$1;
var _Object$getOwnPropertyDescriptors = getDefaultExportFromCjs(getOwnPropertyDescriptors2);
var defineProperties$4 = { exports: {} };
var $$h = _export;
var DESCRIPTORS$3 = descriptors;
var defineProperties$3 = objectDefineProperties.f;
$$h({ target: "Object", stat: true, forced: Object.defineProperties !== defineProperties$3, sham: !DESCRIPTORS$3 }, {
  defineProperties: defineProperties$3
});
var path$4 = path$o;
var Object$1 = path$4.Object;
var defineProperties$2 = defineProperties$4.exports = function defineProperties3(T, D) {
  return Object$1.defineProperties(T, D);
};
if (Object$1.defineProperties.sham)
  defineProperties$2.sham = true;
var definePropertiesExports = defineProperties$4.exports;
var parent$q = definePropertiesExports;
var defineProperties$1 = parent$q;
var defineProperties4 = defineProperties$1;
var _Object$defineProperties = getDefaultExportFromCjs(defineProperties4);
var defineProperty$2 = defineProperty$b;
var _Object$defineProperty = getDefaultExportFromCjs(defineProperty$2);
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
var parent$p = create$7;
var create$4 = parent$p;
var parent$o = create$4;
var create$3 = parent$o;
var create$2 = create$3;
var _Object$create = getDefaultExportFromCjs(create$2);
var $$g = _export;
var setPrototypeOf$6 = objectSetPrototypeOf;
$$g({ target: "Object", stat: true }, {
  setPrototypeOf: setPrototypeOf$6
});
var path$3 = path$o;
var setPrototypeOf$5 = path$3.Object.setPrototypeOf;
var parent$n = setPrototypeOf$5;
var setPrototypeOf$4 = parent$n;
var parent$m = setPrototypeOf$4;
var setPrototypeOf$3 = parent$m;
var parent$l = setPrototypeOf$3;
var setPrototypeOf$2 = parent$l;
var setPrototypeOf$1 = setPrototypeOf$2;
var _Object$setPrototypeOf = getDefaultExportFromCjs(setPrototypeOf$1);
var parent$k = bind$c;
var bind$7 = parent$k;
var parent$j = bind$7;
var bind$6 = parent$j;
var bind$5 = bind$6;
var _bindInstanceProperty = getDefaultExportFromCjs(bind$5);
function _setPrototypeOf(o, p) {
  var _context;
  _setPrototypeOf = _Object$setPrototypeOf ? _bindInstanceProperty(_context = _Object$setPrototypeOf).call(_context) : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  _Object$defineProperty$1(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self2, call2) {
  if (call2 && (_typeof$1(call2) === "object" || typeof call2 === "function")) {
    return call2;
  } else if (call2 !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}
var parent$i = getPrototypeOf$4;
var getPrototypeOf$3 = parent$i;
var parent$h = getPrototypeOf$3;
var getPrototypeOf$2 = parent$h;
var getPrototypeOf$1 = getPrototypeOf$2;
var _Object$getPrototypeOf = getDefaultExportFromCjs(getPrototypeOf$1);
function _getPrototypeOf(o) {
  var _context;
  _getPrototypeOf = _Object$setPrototypeOf ? _bindInstanceProperty(_context = _Object$getPrototypeOf).call(_context) : function _getPrototypeOf2(o2) {
    return o2.__proto__ || _Object$getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
var regeneratorRuntime$1 = { exports: {} };
var _typeof = { exports: {} };
(function(module) {
  var _Symbol2 = symbol$1;
  var _Symbol$iterator2 = iterator$1;
  function _typeof2(o) {
    "@babel/helpers - typeof";
    return module.exports = _typeof2 = "function" == typeof _Symbol2 && "symbol" == typeof _Symbol$iterator2 ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && "function" == typeof _Symbol2 && o2.constructor === _Symbol2 && o2 !== _Symbol2.prototype ? "symbol" : typeof o2;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof2(o);
  }
  module.exports = _typeof2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(_typeof);
var _typeofExports = _typeof.exports;
var parent$g = forEach$5;
var forEach$3 = parent$g;
var parent$f = forEach$3;
var forEach$2 = parent$f;
var forEach$1 = forEach$2;
var hasOwn$5 = hasOwnProperty_1;
var ownKeys$1 = ownKeys$7;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule = objectDefineProperty;
var copyConstructorProperties$1 = function(target, source, exceptions) {
  var keys4 = ownKeys$1(source);
  var defineProperty6 = definePropertyModule.f;
  var getOwnPropertyDescriptor6 = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys4.length; i++) {
    var key = keys4[i];
    if (!hasOwn$5(target, key) && !(exceptions && hasOwn$5(exceptions, key))) {
      defineProperty6(target, key, getOwnPropertyDescriptor6(source, key));
    }
  }
};
var isObject$5 = isObject$h;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$9;
var installErrorCause$1 = function(O, options) {
  if (isObject$5(options) && "cause" in options) {
    createNonEnumerableProperty$3(O, "cause", options.cause);
  }
};
var uncurryThis$2 = functionUncurryThis;
var $Error$1 = Error;
var replace = uncurryThis$2("".replace);
var TEST = function(arg) {
  return String(new $Error$1(arg).stack);
}("zxcasd");
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
var errorStackClear = function(stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == "string" && !$Error$1.prepareStackTrace) {
    while (dropEntries--)
      stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, "");
  }
  return stack;
};
var fails$7 = fails$u;
var createPropertyDescriptor$1 = createPropertyDescriptor$7;
var errorStackInstallable = !fails$7(function() {
  var error = new Error("a");
  if (!("stack" in error))
    return true;
  Object.defineProperty(error, "stack", createPropertyDescriptor$1(1, 7));
  return error.stack !== 7;
});
var createNonEnumerableProperty$2 = createNonEnumerableProperty$9;
var clearErrorStack = errorStackClear;
var ERROR_STACK_INSTALLABLE = errorStackInstallable;
var captureStackTrace = Error.captureStackTrace;
var errorStackInstall = function(error, C, stack, dropEntries) {
  if (ERROR_STACK_INSTALLABLE) {
    if (captureStackTrace)
      captureStackTrace(error, C);
    else
      createNonEnumerableProperty$2(error, "stack", clearErrorStack(stack, dropEntries));
  }
};
var bind$4 = functionBindContext;
var call$6 = functionCall;
var anObject$2 = anObject$d;
var tryToString = tryToString$6;
var isArrayIteratorMethod = isArrayIteratorMethod$2;
var lengthOfArrayLike$1 = lengthOfArrayLike$d;
var isPrototypeOf$7 = objectIsPrototypeOf;
var getIterator$6 = getIterator$8;
var getIteratorMethod = getIteratorMethod$9;
var iteratorClose = iteratorClose$2;
var $TypeError$2 = TypeError;
var Result = function(stopped, result) {
  this.stopped = stopped;
  this.result = result;
};
var ResultPrototype = Result.prototype;
var iterate$7 = function(iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind$4(unboundFunction, that);
  var iterator2, iterFn, index, length, result, next2, step;
  var stop = function(condition) {
    if (iterator2)
      iteratorClose(iterator2, "normal", condition);
    return new Result(true, condition);
  };
  var callFn = function(value) {
    if (AS_ENTRIES) {
      anObject$2(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    }
    return INTERRUPTED ? fn(value, stop) : fn(value);
  };
  if (IS_RECORD) {
    iterator2 = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator2 = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn)
      throw new $TypeError$2(tryToString(iterable) + " is not iterable");
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$1(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$7(ResultPrototype, result))
          return result;
      }
      return new Result(false);
    }
    iterator2 = getIterator$6(iterable, iterFn);
  }
  next2 = IS_RECORD ? iterable.next : iterator2.next;
  while (!(step = call$6(next2, iterator2)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator2, "throw", error);
    }
    if (typeof result == "object" && result && isPrototypeOf$7(ResultPrototype, result))
      return result;
  }
  return new Result(false);
};
var toString$1 = toString$7;
var normalizeStringArgument$1 = function(argument, $default) {
  return argument === void 0 ? arguments.length < 2 ? "" : $default : toString$1(argument);
};
var $$f = _export;
var isPrototypeOf$6 = objectIsPrototypeOf;
var getPrototypeOf2 = objectGetPrototypeOf;
var setPrototypeOf = objectSetPrototypeOf;
var copyConstructorProperties = copyConstructorProperties$1;
var create$1 = objectCreate;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$9;
var createPropertyDescriptor = createPropertyDescriptor$7;
var installErrorCause = installErrorCause$1;
var installErrorStack = errorStackInstall;
var iterate$6 = iterate$7;
var normalizeStringArgument = normalizeStringArgument$1;
var wellKnownSymbol$3 = wellKnownSymbol$n;
var TO_STRING_TAG = wellKnownSymbol$3("toStringTag");
var $Error = Error;
var push$1 = [].push;
var $AggregateError = function AggregateError(errors, message) {
  var isInstance = isPrototypeOf$6(AggregateErrorPrototype, this);
  var that;
  if (setPrototypeOf) {
    that = setPrototypeOf(new $Error(), isInstance ? getPrototypeOf2(this) : AggregateErrorPrototype);
  } else {
    that = isInstance ? this : create$1(AggregateErrorPrototype);
    createNonEnumerableProperty$1(that, TO_STRING_TAG, "Error");
  }
  if (message !== void 0)
    createNonEnumerableProperty$1(that, "message", normalizeStringArgument(message));
  installErrorStack(that, $AggregateError, that.stack, 1);
  if (arguments.length > 2)
    installErrorCause(that, arguments[2]);
  var errorsArray = [];
  iterate$6(errors, push$1, { that: errorsArray });
  createNonEnumerableProperty$1(that, "errors", errorsArray);
  return that;
};
if (setPrototypeOf)
  setPrototypeOf($AggregateError, $Error);
else
  copyConstructorProperties($AggregateError, $Error, { name: true });
var AggregateErrorPrototype = $AggregateError.prototype = create$1($Error.prototype, {
  constructor: createPropertyDescriptor(1, $AggregateError),
  message: createPropertyDescriptor(1, ""),
  name: createPropertyDescriptor(1, "AggregateError")
});
$$f({ global: true, constructor: true, arity: 2 }, {
  AggregateError: $AggregateError
});
var getBuiltIn$3 = getBuiltIn$f;
var defineBuiltInAccessor$1 = defineBuiltInAccessor$3;
var wellKnownSymbol$2 = wellKnownSymbol$n;
var DESCRIPTORS$2 = descriptors;
var SPECIES$2 = wellKnownSymbol$2("species");
var setSpecies$2 = function(CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$3(CONSTRUCTOR_NAME);
  if (DESCRIPTORS$2 && Constructor && !Constructor[SPECIES$2]) {
    defineBuiltInAccessor$1(Constructor, SPECIES$2, {
      configurable: true,
      get: function() {
        return this;
      }
    });
  }
};
var isPrototypeOf$5 = objectIsPrototypeOf;
var $TypeError$1 = TypeError;
var anInstance$3 = function(it, Prototype) {
  if (isPrototypeOf$5(Prototype, it))
    return it;
  throw new $TypeError$1("Incorrect invocation");
};
var anObject$1 = anObject$d;
var aConstructor = aConstructor$2;
var isNullOrUndefined$2 = isNullOrUndefined$6;
var wellKnownSymbol$1 = wellKnownSymbol$n;
var SPECIES$1 = wellKnownSymbol$1("species");
var speciesConstructor$2 = function(O, defaultConstructor) {
  var C = anObject$1(O).constructor;
  var S;
  return C === void 0 || isNullOrUndefined$2(S = anObject$1(C)[SPECIES$1]) ? defaultConstructor : aConstructor(S);
};
var userAgent$4 = engineUserAgent;
var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$4);
var global$6 = global$p;
var apply = functionApply;
var bind$3 = functionBindContext;
var isCallable$4 = isCallable$m;
var hasOwn$4 = hasOwnProperty_1;
var fails$6 = fails$u;
var html = html$2;
var arraySlice$1 = arraySlice$5;
var createElement = documentCreateElement$1;
var validateArgumentsLength = validateArgumentsLength$2;
var IS_IOS$1 = engineIsIos;
var IS_NODE$3 = engineIsNode;
var set$3 = global$6.setImmediate;
var clear = global$6.clearImmediate;
var process$2 = global$6.process;
var Dispatch = global$6.Dispatch;
var Function$1 = global$6.Function;
var MessageChannel = global$6.MessageChannel;
var String$1 = global$6.String;
var counter = 0;
var queue$2 = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var $location;
var defer;
var channel;
var port;
fails$6(function() {
  $location = global$6.location;
});
var run = function(id2) {
  if (hasOwn$4(queue$2, id2)) {
    var fn = queue$2[id2];
    delete queue$2[id2];
    fn();
  }
};
var runner = function(id2) {
  return function() {
    run(id2);
  };
};
var eventListener = function(event) {
  run(event.data);
};
var globalPostMessageDefer = function(id2) {
  global$6.postMessage(String$1(id2), $location.protocol + "//" + $location.host);
};
if (!set$3 || !clear) {
  set$3 = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable$4(handler) ? handler : Function$1(handler);
    var args = arraySlice$1(arguments, 1);
    queue$2[++counter] = function() {
      apply(fn, void 0, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id2) {
    delete queue$2[id2];
  };
  if (IS_NODE$3) {
    defer = function(id2) {
      process$2.nextTick(runner(id2));
    };
  } else if (Dispatch && Dispatch.now) {
    defer = function(id2) {
      Dispatch.now(runner(id2));
    };
  } else if (MessageChannel && !IS_IOS$1) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = eventListener;
    defer = bind$3(port.postMessage, port);
  } else if (global$6.addEventListener && isCallable$4(global$6.postMessage) && !global$6.importScripts && $location && $location.protocol !== "file:" && !fails$6(globalPostMessageDefer)) {
    defer = globalPostMessageDefer;
    global$6.addEventListener("message", eventListener, false);
  } else if (ONREADYSTATECHANGE in createElement("script")) {
    defer = function(id2) {
      html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
        html.removeChild(this);
        run(id2);
      };
    };
  } else {
    defer = function(id2) {
      setTimeout(runner(id2), 0);
    };
  }
}
var task$1 = {
  set: set$3,
  clear
};
var Queue$3 = function() {
  this.head = null;
  this.tail = null;
};
Queue$3.prototype = {
  add: function(item) {
    var entry = { item, next: null };
    var tail = this.tail;
    if (tail)
      tail.next = entry;
    else
      this.head = entry;
    this.tail = entry;
  },
  get: function() {
    var entry = this.head;
    if (entry) {
      var next2 = this.head = entry.next;
      if (next2 === null)
        this.tail = null;
      return entry.item;
    }
  }
};
var queue$1 = Queue$3;
var userAgent$3 = engineUserAgent;
var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$3) && typeof Pebble != "undefined";
var userAgent$2 = engineUserAgent;
var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent$2);
var global$5 = global$p;
var bind$2 = functionBindContext;
var getOwnPropertyDescriptor5 = objectGetOwnPropertyDescriptor.f;
var macrotask = task$1.set;
var Queue$2 = queue$1;
var IS_IOS = engineIsIos;
var IS_IOS_PEBBLE = engineIsIosPebble;
var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
var IS_NODE$2 = engineIsNode;
var MutationObserver = global$5.MutationObserver || global$5.WebKitMutationObserver;
var document$2 = global$5.document;
var process$1 = global$5.process;
var Promise$1 = global$5.Promise;
var queueMicrotaskDescriptor = getOwnPropertyDescriptor5(global$5, "queueMicrotask");
var microtask$1 = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
var notify$1;
var toggle;
var node;
var promise$5;
var then;
if (!microtask$1) {
  queue = new Queue$2();
  flush = function() {
    var parent2, fn;
    if (IS_NODE$2 && (parent2 = process$1.domain))
      parent2.exit();
    while (fn = queue.get())
      try {
        fn();
      } catch (error) {
        if (queue.head)
          notify$1();
        throw error;
      }
    if (parent2)
      parent2.enter();
  };
  if (!IS_IOS && !IS_NODE$2 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
    toggle = true;
    node = document$2.createTextNode("");
    new MutationObserver(flush).observe(node, { characterData: true });
    notify$1 = function() {
      node.data = toggle = !toggle;
    };
  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
    promise$5 = Promise$1.resolve(void 0);
    promise$5.constructor = Promise$1;
    then = bind$2(promise$5.then, promise$5);
    notify$1 = function() {
      then(flush);
    };
  } else if (IS_NODE$2) {
    notify$1 = function() {
      process$1.nextTick(flush);
    };
  } else {
    macrotask = bind$2(macrotask, global$5);
    notify$1 = function() {
      macrotask(flush);
    };
  }
  microtask$1 = function(fn) {
    if (!queue.head)
      notify$1();
    queue.add(fn);
  };
}
var queue;
var flush;
var microtask_1 = microtask$1;
var hostReportErrors$1 = function(a, b) {
  try {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  } catch (error) {
  }
};
var perform$6 = function(exec2) {
  try {
    return { error: false, value: exec2() };
  } catch (error) {
    return { error: true, value: error };
  }
};
var global$4 = global$p;
var promiseNativeConstructor = global$4.Promise;
var engineIsDeno = typeof Deno == "object" && Deno && typeof Deno.version == "object";
var IS_DENO$1 = engineIsDeno;
var IS_NODE$1 = engineIsNode;
var engineIsBrowser = !IS_DENO$1 && !IS_NODE$1 && typeof window == "object" && typeof document == "object";
var global$3 = global$p;
var NativePromiseConstructor$5 = promiseNativeConstructor;
var isCallable$3 = isCallable$m;
var isForced = isForced_1;
var inspectSource = inspectSource$2;
var wellKnownSymbol = wellKnownSymbol$n;
var IS_BROWSER = engineIsBrowser;
var IS_DENO = engineIsDeno;
var V8_VERSION = engineV8Version;
var NativePromisePrototype$2 = NativePromiseConstructor$5 && NativePromiseConstructor$5.prototype;
var SPECIES = wellKnownSymbol("species");
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$3(global$3.PromiseRejectionEvent);
var FORCED_PROMISE_CONSTRUCTOR$5 = isForced("Promise", function() {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$5);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$5);
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66)
    return true;
  if (!(NativePromisePrototype$2["catch"] && NativePromisePrototype$2["finally"]))
    return true;
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    var promise2 = new NativePromiseConstructor$5(function(resolve2) {
      resolve2(1);
    });
    var FakePromise = function(exec2) {
      exec2(function() {
      }, function() {
      });
    };
    var constructor = promise2.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise2.then(function() {
    }) instanceof FakePromise;
    if (!SUBCLASSING)
      return true;
  }
  return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT$1;
});
var promiseConstructorDetection = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
  SUBCLASSING
};
var newPromiseCapability$2 = {};
var aCallable$6 = aCallable$e;
var $TypeError = TypeError;
var PromiseCapability = function(C) {
  var resolve2, reject2;
  this.promise = new C(function($$resolve, $$reject) {
    if (resolve2 !== void 0 || reject2 !== void 0)
      throw new $TypeError("Bad Promise constructor");
    resolve2 = $$resolve;
    reject2 = $$reject;
  });
  this.resolve = aCallable$6(resolve2);
  this.reject = aCallable$6(reject2);
};
newPromiseCapability$2.f = function(C) {
  return new PromiseCapability(C);
};
var $$e = _export;
var IS_NODE = engineIsNode;
var global$2 = global$p;
var call$5 = functionCall;
var defineBuiltIn$1 = defineBuiltIn$6;
var setToStringTag$1 = setToStringTag$7;
var setSpecies$1 = setSpecies$2;
var aCallable$5 = aCallable$e;
var isCallable$2 = isCallable$m;
var isObject$4 = isObject$h;
var anInstance$2 = anInstance$3;
var speciesConstructor$1 = speciesConstructor$2;
var task = task$1.set;
var microtask = microtask_1;
var hostReportErrors = hostReportErrors$1;
var perform$5 = perform$6;
var Queue$1 = queue$1;
var InternalStateModule$2 = internalState;
var NativePromiseConstructor$4 = promiseNativeConstructor;
var PromiseConstructorDetection = promiseConstructorDetection;
var newPromiseCapabilityModule$7 = newPromiseCapability$2;
var PROMISE = "Promise";
var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule$2.getterFor(PROMISE);
var setInternalState$2 = InternalStateModule$2.set;
var NativePromisePrototype$1 = NativePromiseConstructor$4 && NativePromiseConstructor$4.prototype;
var PromiseConstructor = NativePromiseConstructor$4;
var PromisePrototype = NativePromisePrototype$1;
var TypeError$1 = global$2.TypeError;
var document$1 = global$2.document;
var process = global$2.process;
var newPromiseCapability$1 = newPromiseCapabilityModule$7.f;
var newGenericPromiseCapability = newPromiseCapability$1;
var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$2.dispatchEvent);
var UNHANDLED_REJECTION = "unhandledrejection";
var REJECTION_HANDLED = "rejectionhandled";
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal;
var OwnPromiseCapability;
var PromiseWrapper;
var isThenable = function(it) {
  var then2;
  return isObject$4(it) && isCallable$2(then2 = it.then) ? then2 : false;
};
var callReaction = function(reaction, state) {
  var value = state.value;
  var ok = state.state === FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve2 = reaction.resolve;
  var reject2 = reaction.reject;
  var domain = reaction.domain;
  var result, then2, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED)
          onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true)
        result = value;
      else {
        if (domain)
          domain.enter();
        result = handler(value);
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject2(new TypeError$1("Promise-chain cycle"));
      } else if (then2 = isThenable(result)) {
        call$5(then2, result, resolve2, reject2);
      } else
        resolve2(result);
    } else
      reject2(value);
  } catch (error) {
    if (domain && !exited)
      domain.exit();
    reject2(error);
  }
};
var notify = function(state, isReject) {
  if (state.notified)
    return;
  state.notified = true;
  microtask(function() {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection)
      onUnhandled(state);
  });
};
var dispatchEvent = function(name, promise2, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document$1.createEvent("Event");
    event.promise = promise2;
    event.reason = reason;
    event.initEvent(name, false, true);
    global$2.dispatchEvent(event);
  } else
    event = { promise: promise2, reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$2["on" + name]))
    handler(event);
  else if (name === UNHANDLED_REJECTION)
    hostReportErrors("Unhandled promise rejection", reason);
};
var onUnhandled = function(state) {
  call$5(task, global$2, function() {
    var promise2 = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform$5(function() {
        if (IS_NODE) {
          process.emit("unhandledRejection", value, promise2);
        } else
          dispatchEvent(UNHANDLED_REJECTION, promise2, value);
      });
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error)
        throw result.value;
    }
  });
};
var isUnhandled = function(state) {
  return state.rejection !== HANDLED && !state.parent;
};
var onHandleUnhandled = function(state) {
  call$5(task, global$2, function() {
    var promise2 = state.facade;
    if (IS_NODE) {
      process.emit("rejectionHandled", promise2);
    } else
      dispatchEvent(REJECTION_HANDLED, promise2, state.value);
  });
};
var bind$1 = function(fn, state, unwrap) {
  return function(value) {
    fn(state, value, unwrap);
  };
};
var internalReject = function(state, value, unwrap) {
  if (state.done)
    return;
  state.done = true;
  if (unwrap)
    state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};
var internalResolve = function(state, value, unwrap) {
  if (state.done)
    return;
  state.done = true;
  if (unwrap)
    state = unwrap;
  try {
    if (state.facade === value)
      throw new TypeError$1("Promise can't be resolved itself");
    var then2 = isThenable(value);
    if (then2) {
      microtask(function() {
        var wrapper = { done: false };
        try {
          call$5(
            then2,
            value,
            bind$1(internalResolve, wrapper, state),
            bind$1(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};
if (FORCED_PROMISE_CONSTRUCTOR$4) {
  PromiseConstructor = function Promise2(executor) {
    anInstance$2(this, PromisePrototype);
    aCallable$5(executor);
    call$5(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind$1(internalResolve, state), bind$1(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  PromisePrototype = PromiseConstructor.prototype;
  Internal = function Promise2(executor) {
    setInternalState$2(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue$1(),
      rejection: false,
      state: PENDING,
      value: void 0
    });
  };
  Internal.prototype = defineBuiltIn$1(PromisePrototype, "then", function then2(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability$1(speciesConstructor$1(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable$2(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable$2(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process.domain : void 0;
    if (state.state === PENDING)
      state.reactions.add(reaction);
    else
      microtask(function() {
        callReaction(reaction, state);
      });
    return reaction.promise;
  });
  OwnPromiseCapability = function() {
    var promise2 = new Internal();
    var state = getInternalPromiseState(promise2);
    this.promise = promise2;
    this.resolve = bind$1(internalResolve, state);
    this.reject = bind$1(internalReject, state);
  };
  newPromiseCapabilityModule$7.f = newPromiseCapability$1 = function(C) {
    return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
}
$$e({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
  Promise: PromiseConstructor
});
setToStringTag$1(PromiseConstructor, PROMISE, false, true);
setSpecies$1(PROMISE);
var NativePromiseConstructor$3 = promiseNativeConstructor;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$2;
var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;
var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration(function(iterable) {
  NativePromiseConstructor$3.all(iterable).then(void 0, function() {
  });
});
var $$d = _export;
var call$4 = functionCall;
var aCallable$4 = aCallable$e;
var newPromiseCapabilityModule$6 = newPromiseCapability$2;
var perform$4 = perform$6;
var iterate$5 = iterate$7;
var PROMISE_STATICS_INCORRECT_ITERATION$3 = promiseStaticsIncorrectIteration;
$$d({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$3 }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$6.f(C);
    var resolve2 = capability.resolve;
    var reject2 = capability.reject;
    var result = perform$4(function() {
      var $promiseResolve = aCallable$4(C.resolve);
      var values2 = [];
      var counter2 = 0;
      var remaining = 1;
      iterate$5(iterable, function(promise2) {
        var index = counter2++;
        var alreadyCalled = false;
        remaining++;
        call$4($promiseResolve, C, promise2).then(function(value) {
          if (alreadyCalled)
            return;
          alreadyCalled = true;
          values2[index] = value;
          --remaining || resolve2(values2);
        }, reject2);
      });
      --remaining || resolve2(values2);
    });
    if (result.error)
      reject2(result.value);
    return capability.promise;
  }
});
var $$c = _export;
var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
var NativePromiseConstructor$2 = promiseNativeConstructor;
NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;
$$c({ target: "Promise", proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
  "catch": function(onRejected) {
    return this.then(void 0, onRejected);
  }
});
var $$b = _export;
var call$3 = functionCall;
var aCallable$3 = aCallable$e;
var newPromiseCapabilityModule$5 = newPromiseCapability$2;
var perform$3 = perform$6;
var iterate$4 = iterate$7;
var PROMISE_STATICS_INCORRECT_ITERATION$2 = promiseStaticsIncorrectIteration;
$$b({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$2 }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$5.f(C);
    var reject2 = capability.reject;
    var result = perform$3(function() {
      var $promiseResolve = aCallable$3(C.resolve);
      iterate$4(iterable, function(promise2) {
        call$3($promiseResolve, C, promise2).then(capability.resolve, reject2);
      });
    });
    if (result.error)
      reject2(result.value);
    return capability.promise;
  }
});
var $$a = _export;
var call$2 = functionCall;
var newPromiseCapabilityModule$4 = newPromiseCapability$2;
var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;
$$a({ target: "Promise", stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule$4.f(this);
    call$2(capability.reject, void 0, r);
    return capability.promise;
  }
});
var anObject = anObject$d;
var isObject$3 = isObject$h;
var newPromiseCapability = newPromiseCapability$2;
var promiseResolve$2 = function(C, x) {
  anObject(C);
  if (isObject$3(x) && x.constructor === C)
    return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve2 = promiseCapability.resolve;
  resolve2(x);
  return promiseCapability.promise;
};
var $$9 = _export;
var getBuiltIn$2 = getBuiltIn$f;
var IS_PURE = isPure;
var NativePromiseConstructor$1 = promiseNativeConstructor;
var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
var promiseResolve$1 = promiseResolve$2;
var PromiseConstructorWrapper = getBuiltIn$2("Promise");
var CHECK_WRAPPER = !FORCED_PROMISE_CONSTRUCTOR;
$$9({ target: "Promise", stat: true, forced: IS_PURE }, {
  resolve: function resolve(x) {
    return promiseResolve$1(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor$1 : this, x);
  }
});
var $$8 = _export;
var call$1 = functionCall;
var aCallable$2 = aCallable$e;
var newPromiseCapabilityModule$3 = newPromiseCapability$2;
var perform$2 = perform$6;
var iterate$3 = iterate$7;
var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;
$$8({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$3.f(C);
    var resolve2 = capability.resolve;
    var reject2 = capability.reject;
    var result = perform$2(function() {
      var promiseResolve2 = aCallable$2(C.resolve);
      var values2 = [];
      var counter2 = 0;
      var remaining = 1;
      iterate$3(iterable, function(promise2) {
        var index = counter2++;
        var alreadyCalled = false;
        remaining++;
        call$1(promiseResolve2, C, promise2).then(function(value) {
          if (alreadyCalled)
            return;
          alreadyCalled = true;
          values2[index] = { status: "fulfilled", value };
          --remaining || resolve2(values2);
        }, function(error) {
          if (alreadyCalled)
            return;
          alreadyCalled = true;
          values2[index] = { status: "rejected", reason: error };
          --remaining || resolve2(values2);
        });
      });
      --remaining || resolve2(values2);
    });
    if (result.error)
      reject2(result.value);
    return capability.promise;
  }
});
var $$7 = _export;
var call = functionCall;
var aCallable$1 = aCallable$e;
var getBuiltIn$1 = getBuiltIn$f;
var newPromiseCapabilityModule$2 = newPromiseCapability$2;
var perform$1 = perform$6;
var iterate$2 = iterate$7;
var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;
var PROMISE_ANY_ERROR = "No one promise resolved";
$$7({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  any: function any(iterable) {
    var C = this;
    var AggregateError2 = getBuiltIn$1("AggregateError");
    var capability = newPromiseCapabilityModule$2.f(C);
    var resolve2 = capability.resolve;
    var reject2 = capability.reject;
    var result = perform$1(function() {
      var promiseResolve2 = aCallable$1(C.resolve);
      var errors = [];
      var counter2 = 0;
      var remaining = 1;
      var alreadyResolved = false;
      iterate$2(iterable, function(promise2) {
        var index = counter2++;
        var alreadyRejected = false;
        remaining++;
        call(promiseResolve2, C, promise2).then(function(value) {
          if (alreadyRejected || alreadyResolved)
            return;
          alreadyResolved = true;
          resolve2(value);
        }, function(error) {
          if (alreadyRejected || alreadyResolved)
            return;
          alreadyRejected = true;
          errors[index] = error;
          --remaining || reject2(new AggregateError2(errors, PROMISE_ANY_ERROR));
        });
      });
      --remaining || reject2(new AggregateError2(errors, PROMISE_ANY_ERROR));
    });
    if (result.error)
      reject2(result.value);
    return capability.promise;
  }
});
var $$6 = _export;
var NativePromiseConstructor = promiseNativeConstructor;
var fails$5 = fails$u;
var getBuiltIn = getBuiltIn$f;
var isCallable$1 = isCallable$m;
var speciesConstructor = speciesConstructor$2;
var promiseResolve = promiseResolve$2;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var NON_GENERIC = !!NativePromiseConstructor && fails$5(function() {
  NativePromisePrototype["finally"].call({ then: function() {
  } }, function() {
  });
});
$$6({ target: "Promise", proto: true, real: true, forced: NON_GENERIC }, {
  "finally": function(onFinally) {
    var C = speciesConstructor(this, getBuiltIn("Promise"));
    var isFunction = isCallable$1(onFinally);
    return this.then(
      isFunction ? function(x) {
        return promiseResolve(C, onFinally()).then(function() {
          return x;
        });
      } : onFinally,
      isFunction ? function(e) {
        return promiseResolve(C, onFinally()).then(function() {
          throw e;
        });
      } : onFinally
    );
  }
});
var path$2 = path$o;
var promise$4 = path$2.Promise;
var parent$e = promise$4;
var promise$3 = parent$e;
var $$5 = _export;
var newPromiseCapabilityModule$1 = newPromiseCapability$2;
$$5({ target: "Promise", stat: true }, {
  withResolvers: function withResolvers() {
    var promiseCapability = newPromiseCapabilityModule$1.f(this);
    return {
      promise: promiseCapability.promise,
      resolve: promiseCapability.resolve,
      reject: promiseCapability.reject
    };
  }
});
var parent$d = promise$3;
var promise$2 = parent$d;
var $$4 = _export;
var newPromiseCapabilityModule = newPromiseCapability$2;
var perform = perform$6;
$$4({ target: "Promise", stat: true, forced: true }, {
  "try": function(callbackfn) {
    var promiseCapability = newPromiseCapabilityModule.f(this);
    var result = perform(callbackfn);
    (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
    return promiseCapability.promise;
  }
});
var parent$c = promise$2;
var promise$1 = parent$c;
var promise = promise$1;
var parent$b = reverse$4;
var reverse$2 = parent$b;
var parent$a = reverse$2;
var reverse$1 = parent$a;
var reverse2 = reverse$1;
(function(module) {
  var _typeof2 = _typeofExports["default"];
  var _Object$defineProperty2 = defineProperty$8;
  var _Symbol2 = symbol$1;
  var _Object$create2 = create$2;
  var _Object$getPrototypeOf2 = getPrototypeOf$1;
  var _forEachInstanceProperty2 = forEach$1;
  var _pushInstanceProperty2 = push$3;
  var _Object$setPrototypeOf2 = setPrototypeOf$1;
  var _Promise = promise;
  var _reverseInstanceProperty2 = reverse2;
  var _sliceInstanceProperty2 = slice$1;
  function _regeneratorRuntime2() {
    module.exports = _regeneratorRuntime2 = function _regeneratorRuntime3() {
      return e;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = _Object$defineProperty2 || function(t2, e2, r2) {
      t2[e2] = r2.value;
    }, i = "function" == typeof _Symbol2 ? _Symbol2 : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
    function define(t2, e2, r2) {
      return _Object$defineProperty2(t2, e2, {
        value: r2,
        enumerable: true,
        configurable: true,
        writable: true
      }), t2[e2];
    }
    try {
      define({}, "");
    } catch (t2) {
      define = function define2(t3, e2, r2) {
        return t3[e2] = r2;
      };
    }
    function wrap2(t2, e2, r2, n2) {
      var i2 = e2 && e2.prototype instanceof Generator ? e2 : Generator, a2 = _Object$create2(i2.prototype), c2 = new Context(n2 || []);
      return o(a2, "_invoke", {
        value: makeInvokeMethod(t2, r2, c2)
      }), a2;
    }
    function tryCatch(t2, e2, r2) {
      try {
        return {
          type: "normal",
          arg: t2.call(e2, r2)
        };
      } catch (t3) {
        return {
          type: "throw",
          arg: t3
        };
      }
    }
    e.wrap = wrap2;
    var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    var p = {};
    define(p, a, function() {
      return this;
    });
    var d = _Object$getPrototypeOf2, v = d && d(d(values2([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = _Object$create2(p);
    function defineIteratorMethods(t2) {
      var _context;
      _forEachInstanceProperty2(_context = ["next", "throw", "return"]).call(_context, function(e2) {
        define(t2, e2, function(t3) {
          return this._invoke(e2, t3);
        });
      });
    }
    function AsyncIterator(t2, e2) {
      function invoke(r3, o2, i2, a2) {
        var c2 = tryCatch(t2[r3], t2, o2);
        if ("throw" !== c2.type) {
          var u2 = c2.arg, h2 = u2.value;
          return h2 && "object" == _typeof2(h2) && n.call(h2, "__await") ? e2.resolve(h2.__await).then(function(t3) {
            invoke("next", t3, i2, a2);
          }, function(t3) {
            invoke("throw", t3, i2, a2);
          }) : e2.resolve(h2).then(function(t3) {
            u2.value = t3, i2(u2);
          }, function(t3) {
            return invoke("throw", t3, i2, a2);
          });
        }
        a2(c2.arg);
      }
      var r2;
      o(this, "_invoke", {
        value: function value(t3, n2) {
          function callInvokeWithMethodAndArg() {
            return new e2(function(e3, r3) {
              invoke(t3, n2, e3, r3);
            });
          }
          return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e2, r2, n2) {
      var o2 = h;
      return function(i2, a2) {
        if (o2 === f)
          throw new Error("Generator is already running");
        if (o2 === s) {
          if ("throw" === i2)
            throw a2;
          return {
            value: t,
            done: true
          };
        }
        for (n2.method = i2, n2.arg = a2; ; ) {
          var c2 = n2.delegate;
          if (c2) {
            var u2 = maybeInvokeDelegate(c2, n2);
            if (u2) {
              if (u2 === y)
                continue;
              return u2;
            }
          }
          if ("next" === n2.method)
            n2.sent = n2._sent = n2.arg;
          else if ("throw" === n2.method) {
            if (o2 === h)
              throw o2 = s, n2.arg;
            n2.dispatchException(n2.arg);
          } else
            "return" === n2.method && n2.abrupt("return", n2.arg);
          o2 = f;
          var p2 = tryCatch(e2, r2, n2);
          if ("normal" === p2.type) {
            if (o2 = n2.done ? s : l, p2.arg === y)
              continue;
            return {
              value: p2.arg,
              done: n2.done
            };
          }
          "throw" === p2.type && (o2 = s, n2.method = "throw", n2.arg = p2.arg);
        }
      };
    }
    function maybeInvokeDelegate(e2, r2) {
      var n2 = r2.method, o2 = e2.iterator[n2];
      if (o2 === t)
        return r2.delegate = null, "throw" === n2 && e2.iterator["return"] && (r2.method = "return", r2.arg = t, maybeInvokeDelegate(e2, r2), "throw" === r2.method) || "return" !== n2 && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n2 + "' method")), y;
      var i2 = tryCatch(o2, e2.iterator, r2.arg);
      if ("throw" === i2.type)
        return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
      var a2 = i2.arg;
      return a2 ? a2.done ? (r2[e2.resultName] = a2.value, r2.next = e2.nextLoc, "return" !== r2.method && (r2.method = "next", r2.arg = t), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
    }
    function pushTryEntry(t2) {
      var _context2;
      var e2 = {
        tryLoc: t2[0]
      };
      1 in t2 && (e2.catchLoc = t2[1]), 2 in t2 && (e2.finallyLoc = t2[2], e2.afterLoc = t2[3]), _pushInstanceProperty2(_context2 = this.tryEntries).call(_context2, e2);
    }
    function resetTryEntry(t2) {
      var e2 = t2.completion || {};
      e2.type = "normal", delete e2.arg, t2.completion = e2;
    }
    function Context(t2) {
      this.tryEntries = [{
        tryLoc: "root"
      }], _forEachInstanceProperty2(t2).call(t2, pushTryEntry, this), this.reset(true);
    }
    function values2(e2) {
      if (e2 || "" === e2) {
        var r2 = e2[a];
        if (r2)
          return r2.call(e2);
        if ("function" == typeof e2.next)
          return e2;
        if (!isNaN(e2.length)) {
          var o2 = -1, i2 = function next2() {
            for (; ++o2 < e2.length; )
              if (n.call(e2, o2))
                return next2.value = e2[o2], next2.done = false, next2;
            return next2.value = t, next2.done = true, next2;
          };
          return i2.next = i2;
        }
      }
      throw new TypeError(_typeof2(e2) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: true
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: true
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t2) {
      var e2 = "function" == typeof t2 && t2.constructor;
      return !!e2 && (e2 === GeneratorFunction || "GeneratorFunction" === (e2.displayName || e2.name));
    }, e.mark = function(t2) {
      return _Object$setPrototypeOf2 ? _Object$setPrototypeOf2(t2, GeneratorFunctionPrototype) : (t2.__proto__ = GeneratorFunctionPrototype, define(t2, u, "GeneratorFunction")), t2.prototype = _Object$create2(g), t2;
    }, e.awrap = function(t2) {
      return {
        __await: t2
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function(t2, r2, n2, o2, i2) {
      void 0 === i2 && (i2 = _Promise);
      var a2 = new AsyncIterator(wrap2(t2, r2, n2, o2), i2);
      return e.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t3) {
        return t3.done ? t3.value : a2.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
      return this;
    }), define(g, "toString", function() {
      return "[object Generator]";
    }), e.keys = function(t2) {
      var e2 = Object(t2), r2 = [];
      for (var n2 in e2)
        _pushInstanceProperty2(r2).call(r2, n2);
      return _reverseInstanceProperty2(r2).call(r2), function next2() {
        for (; r2.length; ) {
          var t3 = r2.pop();
          if (t3 in e2)
            return next2.value = t3, next2.done = false, next2;
        }
        return next2.done = true, next2;
      };
    }, e.values = values2, Context.prototype = {
      constructor: Context,
      reset: function reset(e2) {
        var _context3;
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, _forEachInstanceProperty2(_context3 = this.tryEntries).call(_context3, resetTryEntry), !e2)
          for (var r2 in this)
            "t" === r2.charAt(0) && n.call(this, r2) && !isNaN(+_sliceInstanceProperty2(r2).call(r2, 1)) && (this[r2] = t);
      },
      stop: function stop() {
        this.done = true;
        var t2 = this.tryEntries[0].completion;
        if ("throw" === t2.type)
          throw t2.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e2) {
        if (this.done)
          throw e2;
        var r2 = this;
        function handle(n2, o3) {
          return a2.type = "throw", a2.arg = e2, r2.next = n2, o3 && (r2.method = "next", r2.arg = t), !!o3;
        }
        for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
          var i2 = this.tryEntries[o2], a2 = i2.completion;
          if ("root" === i2.tryLoc)
            return handle("end");
          if (i2.tryLoc <= this.prev) {
            var c2 = n.call(i2, "catchLoc"), u2 = n.call(i2, "finallyLoc");
            if (c2 && u2) {
              if (this.prev < i2.catchLoc)
                return handle(i2.catchLoc, true);
              if (this.prev < i2.finallyLoc)
                return handle(i2.finallyLoc);
            } else if (c2) {
              if (this.prev < i2.catchLoc)
                return handle(i2.catchLoc, true);
            } else {
              if (!u2)
                throw new Error("try statement without catch or finally");
              if (this.prev < i2.finallyLoc)
                return handle(i2.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t2, e2) {
        for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
          var o2 = this.tryEntries[r2];
          if (o2.tryLoc <= this.prev && n.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
            var i2 = o2;
            break;
          }
        }
        i2 && ("break" === t2 || "continue" === t2) && i2.tryLoc <= e2 && e2 <= i2.finallyLoc && (i2 = null);
        var a2 = i2 ? i2.completion : {};
        return a2.type = t2, a2.arg = e2, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
      },
      complete: function complete(t2, e2) {
        if ("throw" === t2.type)
          throw t2.arg;
        return "break" === t2.type || "continue" === t2.type ? this.next = t2.arg : "return" === t2.type ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : "normal" === t2.type && e2 && (this.next = e2), y;
      },
      finish: function finish(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.finallyLoc === t2)
            return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
        }
      },
      "catch": function _catch(t2) {
        for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
          var r2 = this.tryEntries[e2];
          if (r2.tryLoc === t2) {
            var n2 = r2.completion;
            if ("throw" === n2.type) {
              var o2 = n2.arg;
              resetTryEntry(r2);
            }
            return o2;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(e2, r2, n2) {
        return this.delegate = {
          iterator: values2(e2),
          resultName: r2,
          nextLoc: n2
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  module.exports = _regeneratorRuntime2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(regeneratorRuntime$1);
var regeneratorRuntimeExports = regeneratorRuntime$1.exports;
var runtime = regeneratorRuntimeExports();
var regenerator = runtime;
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
var _regeneratorRuntime = getDefaultExportFromCjs(regenerator);
var internalMetadata = { exports: {} };
var fails$4 = fails$u;
var arrayBufferNonExtensible = fails$4(function() {
  if (typeof ArrayBuffer == "function") {
    var buffer = new ArrayBuffer(8);
    if (Object.isExtensible(buffer))
      Object.defineProperty(buffer, "a", { value: 8 });
  }
});
var fails$3 = fails$u;
var isObject$2 = isObject$h;
var classof$3 = classofRaw$2;
var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails$3(function() {
  $isExtensible(1);
});
var objectIsExtensible = FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE ? function isExtensible(it) {
  if (!isObject$2(it))
    return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$3(it) === "ArrayBuffer")
    return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;
var fails$2 = fails$u;
var freezing = !fails$2(function() {
  return Object.isExtensible(Object.preventExtensions({}));
});
var $$3 = _export;
var uncurryThis$1 = functionUncurryThis;
var hiddenKeys = hiddenKeys$6;
var isObject$1 = isObject$h;
var hasOwn$3 = hasOwnProperty_1;
var defineProperty$1 = objectDefineProperty.f;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
var isExtensible2 = objectIsExtensible;
var uid = uid$4;
var FREEZING = freezing;
var REQUIRED = false;
var METADATA = uid("meta");
var id = 0;
var setMetadata = function(it) {
  defineProperty$1(it, METADATA, { value: {
    objectID: "O" + id++,
    // object ID
    weakData: {}
    // weak collections IDs
  } });
};
var fastKey$1 = function(it, create5) {
  if (!isObject$1(it))
    return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
  if (!hasOwn$3(it, METADATA)) {
    if (!isExtensible2(it))
      return "F";
    if (!create5)
      return "E";
    setMetadata(it);
  }
  return it[METADATA].objectID;
};
var getWeakData = function(it, create5) {
  if (!hasOwn$3(it, METADATA)) {
    if (!isExtensible2(it))
      return true;
    if (!create5)
      return false;
    setMetadata(it);
  }
  return it[METADATA].weakData;
};
var onFreeze = function(it) {
  if (FREEZING && REQUIRED && isExtensible2(it) && !hasOwn$3(it, METADATA))
    setMetadata(it);
  return it;
};
var enable = function() {
  meta.enable = function() {
  };
  REQUIRED = true;
  var getOwnPropertyNames5 = getOwnPropertyNamesModule.f;
  var splice3 = uncurryThis$1([].splice);
  var test2 = {};
  test2[METADATA] = 1;
  if (getOwnPropertyNames5(test2).length) {
    getOwnPropertyNamesModule.f = function(it) {
      var result = getOwnPropertyNames5(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice3(result, i, 1);
          break;
        }
      }
      return result;
    };
    $$3({ target: "Object", stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};
var meta = internalMetadata.exports = {
  enable,
  fastKey: fastKey$1,
  getWeakData,
  onFreeze
};
hiddenKeys[METADATA] = true;
var internalMetadataExports = internalMetadata.exports;
var $$2 = _export;
var global$1 = global$p;
var InternalMetadataModule = internalMetadataExports;
var fails$1 = fails$u;
var createNonEnumerableProperty = createNonEnumerableProperty$9;
var iterate$1 = iterate$7;
var anInstance$1 = anInstance$3;
var isCallable = isCallable$m;
var isObject = isObject$h;
var isNullOrUndefined$1 = isNullOrUndefined$6;
var setToStringTag = setToStringTag$7;
var defineProperty5 = objectDefineProperty.f;
var forEach2 = arrayIteration.forEach;
var DESCRIPTORS$1 = descriptors;
var InternalStateModule$1 = internalState;
var setInternalState$1 = InternalStateModule$1.set;
var internalStateGetterFor$1 = InternalStateModule$1.getterFor;
var collection$2 = function(CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf("Map") !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf("Weak") !== -1;
  var ADDER = IS_MAP ? "set" : "add";
  var NativeConstructor = global$1[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var exported = {};
  var Constructor;
  if (!DESCRIPTORS$1 || !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails$1(function() {
    new NativeConstructor().entries().next();
  }))) {
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else {
    Constructor = wrapper(function(target, iterable) {
      setInternalState$1(anInstance$1(target, Prototype), {
        type: CONSTRUCTOR_NAME,
        collection: new NativeConstructor()
      });
      if (!isNullOrUndefined$1(iterable))
        iterate$1(iterable, target[ADDER], { that: target, AS_ENTRIES: IS_MAP });
    });
    var Prototype = Constructor.prototype;
    var getInternalState2 = internalStateGetterFor$1(CONSTRUCTOR_NAME);
    forEach2(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(KEY) {
      var IS_ADDER = KEY === "add" || KEY === "set";
      if (KEY in NativePrototype && !(IS_WEAK && KEY === "clear")) {
        createNonEnumerableProperty(Prototype, KEY, function(a, b) {
          var collection2 = getInternalState2(this).collection;
          if (!IS_ADDER && IS_WEAK && !isObject(a))
            return KEY === "get" ? void 0 : false;
          var result = collection2[KEY](a === 0 ? 0 : a, b);
          return IS_ADDER ? this : result;
        });
      }
    });
    IS_WEAK || defineProperty5(Prototype, "size", {
      configurable: true,
      get: function() {
        return getInternalState2(this).collection.size;
      }
    });
  }
  setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true);
  exported[CONSTRUCTOR_NAME] = Constructor;
  $$2({ global: true, forced: true }, exported);
  if (!IS_WEAK)
    common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
  return Constructor;
};
var defineBuiltIn = defineBuiltIn$6;
var defineBuiltIns$1 = function(target, src, options) {
  for (var key in src) {
    if (options && options.unsafe && target[key])
      target[key] = src[key];
    else
      defineBuiltIn(target, key, src[key], options);
  }
  return target;
};
var create4 = objectCreate;
var defineBuiltInAccessor = defineBuiltInAccessor$3;
var defineBuiltIns = defineBuiltIns$1;
var bind2 = functionBindContext;
var anInstance = anInstance$3;
var isNullOrUndefined = isNullOrUndefined$6;
var iterate = iterate$7;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$3;
var setSpecies = setSpecies$2;
var DESCRIPTORS = descriptors;
var fastKey = internalMetadataExports.fastKey;
var InternalStateModule = internalState;
var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var collectionStrong$2 = {
  getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function(that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create4(null),
        first: void 0,
        last: void 0,
        size: 0
      });
      if (!DESCRIPTORS)
        that.size = 0;
      if (!isNullOrUndefined(iterable))
        iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
    });
    var Prototype = Constructor.prototype;
    var getInternalState2 = internalStateGetterFor(CONSTRUCTOR_NAME);
    var define = function(that, key, value) {
      var state = getInternalState2(that);
      var entry = getEntry(that, key);
      var previous, index;
      if (entry) {
        entry.value = value;
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key,
          value,
          previous: previous = state.last,
          next: void 0,
          removed: false
        };
        if (!state.first)
          state.first = entry;
        if (previous)
          previous.next = entry;
        if (DESCRIPTORS)
          state.size++;
        else
          that.size++;
        if (index !== "F")
          state.index[index] = entry;
      }
      return that;
    };
    var getEntry = function(that, key) {
      var state = getInternalState2(that);
      var index = fastKey(key);
      var entry;
      if (index !== "F")
        return state.index[index];
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key === key)
          return entry;
      }
    };
    defineBuiltIns(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear2() {
        var that = this;
        var state = getInternalState2(that);
        var data2 = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous)
            entry.previous = entry.previous.next = void 0;
          delete data2[entry.index];
          entry = entry.next;
        }
        state.first = state.last = void 0;
        if (DESCRIPTORS)
          state.size = 0;
        else
          that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      "delete": function(key) {
        var that = this;
        var state = getInternalState2(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next2 = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev)
            prev.next = next2;
          if (next2)
            next2.previous = prev;
          if (state.first === entry)
            state.first = next2;
          if (state.last === entry)
            state.last = prev;
          if (DESCRIPTORS)
            state.size--;
          else
            that.size--;
        }
        return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach3(callbackfn) {
        var state = getInternalState2(this);
        var boundFunction = bind2(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          while (entry && entry.removed)
            entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has2(key) {
        return !!getEntry(this, key);
      }
    });
    defineBuiltIns(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get2(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set2(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS)
      defineBuiltInAccessor(Prototype, "size", {
        configurable: true,
        get: function() {
          return getInternalState2(this).size;
        }
      });
    return Constructor;
  },
  setStrong: function(Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + " Iterator";
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    defineIterator(Constructor, CONSTRUCTOR_NAME, function(iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind,
        last: void 0
      });
    }, function() {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      while (entry && entry.removed)
        entry = entry.previous;
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        state.target = void 0;
        return createIterResultObject(void 0, true);
      }
      if (kind === "keys")
        return createIterResultObject(entry.key, false);
      if (kind === "values")
        return createIterResultObject(entry.value, false);
      return createIterResultObject([entry.key, entry.value], false);
    }, IS_MAP ? "entries" : "values", !IS_MAP, true);
    setSpecies(CONSTRUCTOR_NAME);
  }
};
var collection$1 = collection$2;
var collectionStrong$1 = collectionStrong$2;
collection$1("Map", function(init) {
  return function Map2() {
    return init(this, arguments.length ? arguments[0] : void 0);
  };
}, collectionStrong$1);
var path$1 = path$o;
var map$2 = path$1.Map;
var parent$9 = map$2;
var map$1 = parent$9;
var map2 = map$1;
var _Map = getDefaultExportFromCjs(map2);
var $$1 = _export;
var $some = arrayIteration.some;
var arrayMethodIsStrict$1 = arrayMethodIsStrict$4;
var STRICT_METHOD$1 = arrayMethodIsStrict$1("some");
$$1({ target: "Array", proto: true, forced: !STRICT_METHOD$1 }, {
  some: function some(callbackfn) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var getBuiltInPrototypeMethod$4 = getBuiltInPrototypeMethod$g;
var some$3 = getBuiltInPrototypeMethod$4("Array", "some");
var isPrototypeOf$4 = objectIsPrototypeOf;
var method$4 = some$3;
var ArrayPrototype$4 = Array.prototype;
var some$2 = function(it) {
  var own = it.some;
  return it === ArrayPrototype$4 || isPrototypeOf$4(ArrayPrototype$4, it) && own === ArrayPrototype$4.some ? method$4 : own;
};
var parent$8 = some$2;
var some$1 = parent$8;
var some2 = some$1;
var _someInstanceProperty = getDefaultExportFromCjs(some2);
var getBuiltInPrototypeMethod$3 = getBuiltInPrototypeMethod$g;
var keys$3 = getBuiltInPrototypeMethod$3("Array", "keys");
var parent$7 = keys$3;
var keys$2 = parent$7;
var classof$2 = classof$d;
var hasOwn$2 = hasOwnProperty_1;
var isPrototypeOf$3 = objectIsPrototypeOf;
var method$3 = keys$2;
var ArrayPrototype$3 = Array.prototype;
var DOMIterables$2 = {
  DOMTokenList: true,
  NodeList: true
};
var keys$1 = function(it) {
  var own = it.keys;
  return it === ArrayPrototype$3 || isPrototypeOf$3(ArrayPrototype$3, it) && own === ArrayPrototype$3.keys || hasOwn$2(DOMIterables$2, classof$2(it)) ? method$3 : own;
};
var keys3 = keys$1;
var _keysInstanceProperty = getDefaultExportFromCjs(keys3);
var arraySlice = arraySliceSimple;
var floor = Math.floor;
var mergeSort = function(array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    array,
    mergeSort(arraySlice(array, 0, middle), comparefn),
    mergeSort(arraySlice(array, middle), comparefn),
    comparefn
  );
};
var insertionSort = function(array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;
  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++)
      array[j] = element;
  }
  return array;
};
var merge = function(array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;
  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
  }
  return array;
};
var arraySort = mergeSort;
var userAgent$1 = engineUserAgent;
var firefox = userAgent$1.match(/firefox\/(\d+)/i);
var engineFfVersion = !!firefox && +firefox[1];
var UA = engineUserAgent;
var engineIsIeOrEdge = /MSIE|Trident/.test(UA);
var userAgent = engineUserAgent;
var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);
var engineWebkitVersion = !!webkit && +webkit[1];
var $ = _export;
var uncurryThis = functionUncurryThis;
var aCallable = aCallable$e;
var toObject = toObject$e;
var lengthOfArrayLike = lengthOfArrayLike$d;
var deletePropertyOrThrow = deletePropertyOrThrow$2;
var toString2 = toString$7;
var fails = fails$u;
var internalSort = arraySort;
var arrayMethodIsStrict = arrayMethodIsStrict$4;
var FF = engineFfVersion;
var IE_OR_EDGE = engineIsIeOrEdge;
var V8 = engineV8Version;
var WEBKIT = engineWebkitVersion;
var test = [];
var nativeSort = uncurryThis(test.sort);
var push2 = uncurryThis(test.push);
var FAILS_ON_UNDEFINED = fails(function() {
  test.sort(void 0);
});
var FAILS_ON_NULL = fails(function() {
  test.sort(null);
});
var STRICT_METHOD = arrayMethodIsStrict("sort");
var STABLE_SORT = !fails(function() {
  if (V8)
    return V8 < 70;
  if (FF && FF > 3)
    return;
  if (IE_OR_EDGE)
    return true;
  if (WEBKIT)
    return WEBKIT < 603;
  var result = "";
  var code, chr, value, index;
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);
    switch (code) {
      case 66:
      case 69:
      case 70:
      case 72:
        value = 3;
        break;
      case 68:
      case 71:
        value = 4;
        break;
      default:
        value = 2;
    }
    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }
  test.sort(function(a, b) {
    return b.v - a.v;
  });
  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr)
      result += chr;
  }
  return result !== "DGBEFHACIJK";
});
var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;
var getSortCompare = function(comparefn) {
  return function(x, y) {
    if (y === void 0)
      return -1;
    if (x === void 0)
      return 1;
    if (comparefn !== void 0)
      return +comparefn(x, y) || 0;
    return toString2(x) > toString2(y) ? 1 : -1;
  };
};
$({ target: "Array", proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== void 0)
      aCallable(comparefn);
    var array = toObject(this);
    if (STABLE_SORT)
      return comparefn === void 0 ? nativeSort(array) : nativeSort(array, comparefn);
    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;
    for (index = 0; index < arrayLength; index++) {
      if (index in array)
        push2(items, array[index]);
    }
    internalSort(items, getSortCompare(comparefn));
    itemsLength = lengthOfArrayLike(items);
    index = 0;
    while (index < itemsLength)
      array[index] = items[index++];
    while (index < arrayLength)
      deletePropertyOrThrow(array, index++);
    return array;
  }
});
var getBuiltInPrototypeMethod$2 = getBuiltInPrototypeMethod$g;
var sort$3 = getBuiltInPrototypeMethod$2("Array", "sort");
var isPrototypeOf$2 = objectIsPrototypeOf;
var method$2 = sort$3;
var ArrayPrototype$2 = Array.prototype;
var sort$2 = function(it) {
  var own = it.sort;
  return it === ArrayPrototype$2 || isPrototypeOf$2(ArrayPrototype$2, it) && own === ArrayPrototype$2.sort ? method$2 : own;
};
var parent$6 = sort$2;
var sort$1 = parent$6;
var sort2 = sort$1;
var _sortInstanceProperty = getDefaultExportFromCjs(sort2);
var getBuiltInPrototypeMethod$1 = getBuiltInPrototypeMethod$g;
var values$3 = getBuiltInPrototypeMethod$1("Array", "values");
var parent$5 = values$3;
var values$2 = parent$5;
var classof$1 = classof$d;
var hasOwn$1 = hasOwnProperty_1;
var isPrototypeOf$1 = objectIsPrototypeOf;
var method$1 = values$2;
var ArrayPrototype$1 = Array.prototype;
var DOMIterables$1 = {
  DOMTokenList: true,
  NodeList: true
};
var values$1 = function(it) {
  var own = it.values;
  return it === ArrayPrototype$1 || isPrototypeOf$1(ArrayPrototype$1, it) && own === ArrayPrototype$1.values || hasOwn$1(DOMIterables$1, classof$1(it)) ? method$1 : own;
};
var values = values$1;
var _valuesInstanceProperty = getDefaultExportFromCjs(values);
var iterator = iterator$4;
var _Symbol$iterator = getDefaultExportFromCjs(iterator);
var getBuiltInPrototypeMethod = getBuiltInPrototypeMethod$g;
var entries$3 = getBuiltInPrototypeMethod("Array", "entries");
var parent$4 = entries$3;
var entries$2 = parent$4;
var classof = classof$d;
var hasOwn2 = hasOwnProperty_1;
var isPrototypeOf = objectIsPrototypeOf;
var method = entries$2;
var ArrayPrototype = Array.prototype;
var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};
var entries$1 = function(it) {
  var own = it.entries;
  return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.entries || hasOwn2(DOMIterables, classof(it)) ? method : own;
};
var entries = entries$1;
var _entriesInstanceProperty = getDefaultExportFromCjs(entries);
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = {
  randomUUID
};
function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
function isId(value) {
  return typeof value === "string" || typeof value === "number";
}
var Queue = function() {
  function Queue2(options) {
    _classCallCheck(this, Queue2);
    _defineProperty(this, "_queue", []);
    _defineProperty(this, "_timeout", null);
    _defineProperty(this, "_extended", null);
    this.delay = null;
    this.max = Infinity;
    this.setOptions(options);
  }
  _createClass(Queue2, [{
    key: "setOptions",
    value: function setOptions(options) {
      if (options && typeof options.delay !== "undefined") {
        this.delay = options.delay;
      }
      if (options && typeof options.max !== "undefined") {
        this.max = options.max;
      }
      this._flushIfNeeded();
    }
    /**
     * Extend an object with queuing functionality.
     * The object will be extended with a function flush, and the methods provided in options.replace will be replaced with queued ones.
     *
     * @param object - The object to be extended.
     * @param options - Additional options.
     * @returns The created queue.
     */
  }, {
    key: "destroy",
    value: (
      /**
       * Destroy the queue. The queue will first flush all queued actions, and in case it has extended an object, will restore the original object.
       */
      function destroy() {
        this.flush();
        if (this._extended) {
          var object = this._extended.object;
          var methods = this._extended.methods;
          for (var i = 0; i < methods.length; i++) {
            var method2 = methods[i];
            if (method2.original) {
              object[method2.name] = method2.original;
            } else {
              delete object[method2.name];
            }
          }
          this._extended = null;
        }
      }
    )
    /**
     * Replace a method on an object with a queued version.
     *
     * @param object - Object having the method.
     * @param method - The method name.
     */
  }, {
    key: "replace",
    value: function replace2(object, method2) {
      var me = this;
      var original = object[method2];
      if (!original) {
        throw new Error("Method " + method2 + " undefined");
      }
      object[method2] = function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        me.queue({
          args,
          fn: original,
          context: this
        });
      };
    }
    /**
     * Queue a call.
     *
     * @param entry - The function or entry to be queued.
     */
  }, {
    key: "queue",
    value: function queue(entry) {
      if (typeof entry === "function") {
        this._queue.push({
          fn: entry
        });
      } else {
        this._queue.push(entry);
      }
      this._flushIfNeeded();
    }
    /**
     * Check whether the queue needs to be flushed.
     */
  }, {
    key: "_flushIfNeeded",
    value: function _flushIfNeeded() {
      var _this = this;
      if (this._queue.length > this.max) {
        this.flush();
      }
      if (this._timeout != null) {
        clearTimeout(this._timeout);
        this._timeout = null;
      }
      if (this.queue.length > 0 && typeof this.delay === "number") {
        this._timeout = _setTimeout(function() {
          _this.flush();
        }, this.delay);
      }
    }
    /**
     * Flush all queued calls
     */
  }, {
    key: "flush",
    value: function flush() {
      var _context, _context2;
      _forEachInstanceProperty(_context = _spliceInstanceProperty(_context2 = this._queue).call(_context2, 0)).call(_context, function(entry) {
        entry.fn.apply(entry.context || entry.fn, entry.args || []);
      });
    }
  }], [{
    key: "extend",
    value: function extend2(object, options) {
      var queue = new Queue2(options);
      if (object.flush !== void 0) {
        throw new Error("Target object already has a property flush");
      }
      object.flush = function() {
        queue.flush();
      };
      var methods = [{
        name: "flush",
        original: void 0
      }];
      if (options && options.replace) {
        for (var i = 0; i < options.replace.length; i++) {
          var name = options.replace[i];
          methods.push({
            name,
            // @TODO: better solution?
            original: object[name]
          });
          queue.replace(object, name);
        }
      }
      queue._extended = {
        object,
        methods
      };
      return queue;
    }
  }]);
  return Queue2;
}();
var DataSetPart = function() {
  function DataSetPart2() {
    _classCallCheck(this, DataSetPart2);
    _defineProperty(this, "_subscribers", {
      "*": [],
      add: [],
      remove: [],
      update: []
    });
    _defineProperty(this, "subscribe", DataSetPart2.prototype.on);
    _defineProperty(this, "unsubscribe", DataSetPart2.prototype.off);
  }
  _createClass(DataSetPart2, [{
    key: "_trigger",
    value: (
      /**
       * Trigger an event
       *
       * @param event - Event name.
       * @param payload - Event payload.
       * @param senderId - Id of the sender.
       */
      function _trigger(event, payload, senderId) {
        var _context, _context2;
        if (event === "*") {
          throw new Error("Cannot trigger event *");
        }
        _forEachInstanceProperty(_context = _concatInstanceProperty(_context2 = []).call(_context2, _toConsumableArray(this._subscribers[event]), _toConsumableArray(this._subscribers["*"]))).call(_context, function(subscriber) {
          subscriber(event, payload, senderId != null ? senderId : null);
        });
      }
    )
    /**
     * Subscribe to an event, add an event listener.
     *
     * @remarks Non-function callbacks are ignored.
     * @param event - Event name.
     * @param callback - Callback method.
     */
  }, {
    key: "on",
    value: function on(event, callback) {
      if (typeof callback === "function") {
        this._subscribers[event].push(callback);
      }
    }
    /**
     * Unsubscribe from an event, remove an event listener.
     *
     * @remarks If the same callback was subscribed more than once **all** occurences will be removed.
     * @param event - Event name.
     * @param callback - Callback method.
     */
  }, {
    key: "off",
    value: function off(event, callback) {
      var _context3;
      this._subscribers[event] = _filterInstanceProperty(_context3 = this._subscribers[event]).call(_context3, function(subscriber) {
        return subscriber !== callback;
      });
    }
  }]);
  return DataSetPart2;
}();
var collection = collection$2;
var collectionStrong = collectionStrong$2;
collection("Set", function(init) {
  return function Set() {
    return init(this, arguments.length ? arguments[0] : void 0);
  };
}, collectionStrong);
var path = path$o;
var set$2 = path.Set;
var parent$3 = set$2;
var set$1 = parent$3;
var set = set$1;
var _Set = getDefaultExportFromCjs(set);
var getIterator$5 = getIterator$8;
var getIterator_1 = getIterator$5;
var parent$2 = getIterator_1;
var getIterator$4 = parent$2;
var parent$1 = getIterator$4;
var getIterator$3 = parent$1;
var parent = getIterator$3;
var getIterator$2 = parent;
var getIterator$1 = getIterator$2;
var getIterator = getIterator$1;
var _getIterator = getDefaultExportFromCjs(getIterator);
function _createForOfIteratorHelper$2(o, allowArrayLike) {
  var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"];
  if (!it) {
    if (_Array$isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray$2(o, minLen) {
  var _context10;
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$2(o, minLen);
  var n = _sliceInstanceProperty(_context10 = Object.prototype.toString.call(o)).call(_context10, 8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return _Array$from$1(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$2(o, minLen);
}
function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var DataStream = function(_Symbol$iterator$12) {
  function DataStream2(pairs) {
    _classCallCheck(this, DataStream2);
    this._pairs = pairs;
  }
  _createClass(DataStream2, [{
    key: _Symbol$iterator$12,
    value: _regeneratorRuntime.mark(function value() {
      var _iterator, _step, _step$value, id2, item;
      return _regeneratorRuntime.wrap(function value$(_context) {
        while (1)
          switch (_context.prev = _context.next) {
            case 0:
              _iterator = _createForOfIteratorHelper$2(this._pairs);
              _context.prev = 1;
              _iterator.s();
            case 3:
              if ((_step = _iterator.n()).done) {
                _context.next = 9;
                break;
              }
              _step$value = _slicedToArray(_step.value, 2), id2 = _step$value[0], item = _step$value[1];
              _context.next = 7;
              return [id2, item];
            case 7:
              _context.next = 3;
              break;
            case 9:
              _context.next = 14;
              break;
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              _iterator.e(_context.t0);
            case 14:
              _context.prev = 14;
              _iterator.f();
              return _context.finish(14);
            case 17:
            case "end":
              return _context.stop();
          }
      }, value, this, [[1, 11, 14, 17]]);
    })
    /**
     * Return an iterable of key, value pairs for every entry in the stream.
     */
  }, {
    key: "entries",
    value: _regeneratorRuntime.mark(function entries2() {
      var _iterator2, _step2, _step2$value, id2, item;
      return _regeneratorRuntime.wrap(function entries$(_context2) {
        while (1)
          switch (_context2.prev = _context2.next) {
            case 0:
              _iterator2 = _createForOfIteratorHelper$2(this._pairs);
              _context2.prev = 1;
              _iterator2.s();
            case 3:
              if ((_step2 = _iterator2.n()).done) {
                _context2.next = 9;
                break;
              }
              _step2$value = _slicedToArray(_step2.value, 2), id2 = _step2$value[0], item = _step2$value[1];
              _context2.next = 7;
              return [id2, item];
            case 7:
              _context2.next = 3;
              break;
            case 9:
              _context2.next = 14;
              break;
            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](1);
              _iterator2.e(_context2.t0);
            case 14:
              _context2.prev = 14;
              _iterator2.f();
              return _context2.finish(14);
            case 17:
            case "end":
              return _context2.stop();
          }
      }, entries2, this, [[1, 11, 14, 17]]);
    })
    /**
     * Return an iterable of keys in the stream.
     */
  }, {
    key: "keys",
    value: _regeneratorRuntime.mark(function keys4() {
      var _iterator3, _step3, _step3$value, id2;
      return _regeneratorRuntime.wrap(function keys$(_context3) {
        while (1)
          switch (_context3.prev = _context3.next) {
            case 0:
              _iterator3 = _createForOfIteratorHelper$2(this._pairs);
              _context3.prev = 1;
              _iterator3.s();
            case 3:
              if ((_step3 = _iterator3.n()).done) {
                _context3.next = 9;
                break;
              }
              _step3$value = _slicedToArray(_step3.value, 1), id2 = _step3$value[0];
              _context3.next = 7;
              return id2;
            case 7:
              _context3.next = 3;
              break;
            case 9:
              _context3.next = 14;
              break;
            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](1);
              _iterator3.e(_context3.t0);
            case 14:
              _context3.prev = 14;
              _iterator3.f();
              return _context3.finish(14);
            case 17:
            case "end":
              return _context3.stop();
          }
      }, keys4, this, [[1, 11, 14, 17]]);
    })
    /**
     * Return an iterable of values in the stream.
     */
  }, {
    key: "values",
    value: _regeneratorRuntime.mark(function values2() {
      var _iterator4, _step4, _step4$value, item;
      return _regeneratorRuntime.wrap(function values$(_context4) {
        while (1)
          switch (_context4.prev = _context4.next) {
            case 0:
              _iterator4 = _createForOfIteratorHelper$2(this._pairs);
              _context4.prev = 1;
              _iterator4.s();
            case 3:
              if ((_step4 = _iterator4.n()).done) {
                _context4.next = 9;
                break;
              }
              _step4$value = _slicedToArray(_step4.value, 2), item = _step4$value[1];
              _context4.next = 7;
              return item;
            case 7:
              _context4.next = 3;
              break;
            case 9:
              _context4.next = 14;
              break;
            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](1);
              _iterator4.e(_context4.t0);
            case 14:
              _context4.prev = 14;
              _iterator4.f();
              return _context4.finish(14);
            case 17:
            case "end":
              return _context4.stop();
          }
      }, values2, this, [[1, 11, 14, 17]]);
    })
    /**
     * Return an array containing all the ids in this stream.
     *
     * @remarks
     * The array may contain duplicities.
     * @returns The array with all ids from this stream.
     */
  }, {
    key: "toIdArray",
    value: function toIdArray() {
      var _context5;
      return _mapInstanceProperty(_context5 = _toConsumableArray(this._pairs)).call(_context5, function(pair) {
        return pair[0];
      });
    }
    /**
     * Return an array containing all the items in this stream.
     *
     * @remarks
     * The array may contain duplicities.
     * @returns The array with all items from this stream.
     */
  }, {
    key: "toItemArray",
    value: function toItemArray() {
      var _context6;
      return _mapInstanceProperty(_context6 = _toConsumableArray(this._pairs)).call(_context6, function(pair) {
        return pair[1];
      });
    }
    /**
     * Return an array containing all the entries in this stream.
     *
     * @remarks
     * The array may contain duplicities.
     * @returns The array with all entries from this stream.
     */
  }, {
    key: "toEntryArray",
    value: function toEntryArray() {
      return _toConsumableArray(this._pairs);
    }
    /**
     * Return an object map containing all the items in this stream accessible by ids.
     *
     * @remarks
     * In case of duplicate ids (coerced to string so `7 == '7'`) the last encoutered appears in the returned object.
     * @returns The object map of all id → item pairs from this stream.
     */
  }, {
    key: "toObjectMap",
    value: function toObjectMap() {
      var map3 = _Object$create$1(null);
      var _iterator5 = _createForOfIteratorHelper$2(this._pairs), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          var _step5$value = _slicedToArray(_step5.value, 2), id2 = _step5$value[0], item = _step5$value[1];
          map3[id2] = item;
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      return map3;
    }
    /**
     * Return a map containing all the items in this stream accessible by ids.
     *
     * @returns The map of all id → item pairs from this stream.
     */
  }, {
    key: "toMap",
    value: function toMap() {
      return new _Map(this._pairs);
    }
    /**
     * Return a set containing all the (unique) ids in this stream.
     *
     * @returns The set of all ids from this stream.
     */
  }, {
    key: "toIdSet",
    value: function toIdSet() {
      return new _Set(this.toIdArray());
    }
    /**
     * Return a set containing all the (unique) items in this stream.
     *
     * @returns The set of all items from this stream.
     */
  }, {
    key: "toItemSet",
    value: function toItemSet() {
      return new _Set(this.toItemArray());
    }
    /**
     * Cache the items from this stream.
     *
     * @remarks
     * This method allows for items to be fetched immediatelly and used (possibly multiple times) later.
     * It can also be used to optimize performance as {@link DataStream} would otherwise reevaluate everything upon each iteration.
     *
     * ## Example
     * ```javascript
     * const ds = new DataSet([…])
     *
     * const cachedStream = ds.stream()
     *   .filter(…)
     *   .sort(…)
     *   .map(…)
     *   .cached(…) // Data are fetched, processed and cached here.
     *
     * ds.clear()
     * chachedStream // Still has all the items.
     * ```
     * @returns A new {@link DataStream} with cached items (detached from the original {@link DataSet}).
     */
  }, {
    key: "cache",
    value: function cache() {
      return new DataStream2(_toConsumableArray(this._pairs));
    }
    /**
     * Get the distinct values of given property.
     *
     * @param callback - The function that picks and possibly converts the property.
     * @typeParam T - The type of the distinct value.
     * @returns A set of all distinct properties.
     */
  }, {
    key: "distinct",
    value: function distinct(callback) {
      var set2 = new _Set();
      var _iterator6 = _createForOfIteratorHelper$2(this._pairs), _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
          var _step6$value = _slicedToArray(_step6.value, 2), id2 = _step6$value[0], item = _step6$value[1];
          set2.add(callback(item, id2));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      return set2;
    }
    /**
     * Filter the items of the stream.
     *
     * @param callback - The function that decides whether an item will be included.
     * @returns A new data stream with the filtered items.
     */
  }, {
    key: "filter",
    value: function filter3(callback) {
      var pairs = this._pairs;
      return new DataStream2({
        [_Symbol$iterator]() {
          return _regeneratorRuntime.mark(function _callee() {
            var _iterator7, _step7, _step7$value, id2, item;
            return _regeneratorRuntime.wrap(function _callee$(_context7) {
              while (1)
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _iterator7 = _createForOfIteratorHelper$2(pairs);
                    _context7.prev = 1;
                    _iterator7.s();
                  case 3:
                    if ((_step7 = _iterator7.n()).done) {
                      _context7.next = 10;
                      break;
                    }
                    _step7$value = _slicedToArray(_step7.value, 2), id2 = _step7$value[0], item = _step7$value[1];
                    if (!callback(item, id2)) {
                      _context7.next = 8;
                      break;
                    }
                    _context7.next = 8;
                    return [id2, item];
                  case 8:
                    _context7.next = 3;
                    break;
                  case 10:
                    _context7.next = 15;
                    break;
                  case 12:
                    _context7.prev = 12;
                    _context7.t0 = _context7["catch"](1);
                    _iterator7.e(_context7.t0);
                  case 15:
                    _context7.prev = 15;
                    _iterator7.f();
                    return _context7.finish(15);
                  case 18:
                  case "end":
                    return _context7.stop();
                }
            }, _callee, null, [[1, 12, 15, 18]]);
          })();
        }
      });
    }
    /**
     * Execute a callback for each item of the stream.
     *
     * @param callback - The function that will be invoked for each item.
     */
  }, {
    key: "forEach",
    value: function forEach3(callback) {
      var _iterator8 = _createForOfIteratorHelper$2(this._pairs), _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
          var _step8$value = _slicedToArray(_step8.value, 2), id2 = _step8$value[0], item = _step8$value[1];
          callback(item, id2);
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }
    /**
     * Map the items into a different type.
     *
     * @param callback - The function that does the conversion.
     * @typeParam Mapped - The type of the item after mapping.
     * @returns A new data stream with the mapped items.
     */
  }, {
    key: "map",
    value: function map3(callback) {
      var pairs = this._pairs;
      return new DataStream2({
        [_Symbol$iterator]() {
          return _regeneratorRuntime.mark(function _callee2() {
            var _iterator9, _step9, _step9$value, id2, item;
            return _regeneratorRuntime.wrap(function _callee2$(_context8) {
              while (1)
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _iterator9 = _createForOfIteratorHelper$2(pairs);
                    _context8.prev = 1;
                    _iterator9.s();
                  case 3:
                    if ((_step9 = _iterator9.n()).done) {
                      _context8.next = 9;
                      break;
                    }
                    _step9$value = _slicedToArray(_step9.value, 2), id2 = _step9$value[0], item = _step9$value[1];
                    _context8.next = 7;
                    return [id2, callback(item, id2)];
                  case 7:
                    _context8.next = 3;
                    break;
                  case 9:
                    _context8.next = 14;
                    break;
                  case 11:
                    _context8.prev = 11;
                    _context8.t0 = _context8["catch"](1);
                    _iterator9.e(_context8.t0);
                  case 14:
                    _context8.prev = 14;
                    _iterator9.f();
                    return _context8.finish(14);
                  case 17:
                  case "end":
                    return _context8.stop();
                }
            }, _callee2, null, [[1, 11, 14, 17]]);
          })();
        }
      });
    }
    /**
     * Get the item with the maximum value of given property.
     *
     * @param callback - The function that picks and possibly converts the property.
     * @returns The item with the maximum if found otherwise null.
     */
  }, {
    key: "max",
    value: function max2(callback) {
      var iter = _getIterator(this._pairs);
      var curr = iter.next();
      if (curr.done) {
        return null;
      }
      var maxItem = curr.value[1];
      var maxValue = callback(curr.value[1], curr.value[0]);
      while (!(curr = iter.next()).done) {
        var _curr$value = _slicedToArray(curr.value, 2), id2 = _curr$value[0], item = _curr$value[1];
        var _value = callback(item, id2);
        if (_value > maxValue) {
          maxValue = _value;
          maxItem = item;
        }
      }
      return maxItem;
    }
    /**
     * Get the item with the minimum value of given property.
     *
     * @param callback - The function that picks and possibly converts the property.
     * @returns The item with the minimum if found otherwise null.
     */
  }, {
    key: "min",
    value: function min2(callback) {
      var iter = _getIterator(this._pairs);
      var curr = iter.next();
      if (curr.done) {
        return null;
      }
      var minItem = curr.value[1];
      var minValue = callback(curr.value[1], curr.value[0]);
      while (!(curr = iter.next()).done) {
        var _curr$value2 = _slicedToArray(curr.value, 2), id2 = _curr$value2[0], item = _curr$value2[1];
        var _value2 = callback(item, id2);
        if (_value2 < minValue) {
          minValue = _value2;
          minItem = item;
        }
      }
      return minItem;
    }
    /**
     * Reduce the items into a single value.
     *
     * @param callback - The function that does the reduction.
     * @param accumulator - The initial value of the accumulator.
     * @typeParam T - The type of the accumulated value.
     * @returns The reduced value.
     */
  }, {
    key: "reduce",
    value: function reduce3(callback, accumulator) {
      var _iterator10 = _createForOfIteratorHelper$2(this._pairs), _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
          var _step10$value = _slicedToArray(_step10.value, 2), id2 = _step10$value[0], item = _step10$value[1];
          accumulator = callback(accumulator, item, id2);
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      return accumulator;
    }
    /**
     * Sort the items.
     *
     * @param callback - Item comparator.
     * @returns A new stream with sorted items.
     */
  }, {
    key: "sort",
    value: function sort3(callback) {
      var _this = this;
      return new DataStream2({
        [_Symbol$iterator]: function() {
          var _context9;
          return _getIterator(_sortInstanceProperty(_context9 = _toConsumableArray(_this._pairs)).call(_context9, function(_ref, _ref2) {
            var _ref3 = _slicedToArray(_ref, 2), idA = _ref3[0], itemA = _ref3[1];
            var _ref4 = _slicedToArray(_ref2, 2), idB = _ref4[0], itemB = _ref4[1];
            return callback(itemA, itemB, idA, idB);
          }));
        }
      });
    }
  }]);
  return DataStream2;
}(_Symbol$iterator);
function ownKeys2(e, r) {
  var t = _Object$keys(e);
  if (_Object$getOwnPropertySymbols) {
    var o = _Object$getOwnPropertySymbols(e);
    r && (o = _filterInstanceProperty(o).call(o, function(r2) {
      return _Object$getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var _context10, _context11;
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? _forEachInstanceProperty(_context10 = ownKeys2(Object(t), true)).call(_context10, function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : _Object$getOwnPropertyDescriptors ? _Object$defineProperties(e, _Object$getOwnPropertyDescriptors(t)) : _forEachInstanceProperty(_context11 = ownKeys2(Object(t))).call(_context11, function(r2) {
      _Object$defineProperty(e, r2, _Object$getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _createForOfIteratorHelper$1(o, allowArrayLike) {
  var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"];
  if (!it) {
    if (_Array$isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray$1(o, minLen) {
  var _context9;
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$1(o, minLen);
  var n = _sliceInstanceProperty(_context9 = Object.prototype.toString.call(o)).call(_context9, 8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return _Array$from$1(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$1(o, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = _Reflect$construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !_Reflect$construct)
    return false;
  if (_Reflect$construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function ensureFullItem(item, idProp) {
  if (item[idProp] == null) {
    item[idProp] = v4();
  }
  return item;
}
var DataSet = function(_DataSetPart) {
  _inherits(DataSet2, _DataSetPart);
  var _super = _createSuper$1(DataSet2);
  function DataSet2(data2, options) {
    var _this;
    _classCallCheck(this, DataSet2);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "_queue", null);
    if (data2 && !_Array$isArray(data2)) {
      options = data2;
      data2 = [];
    }
    _this._options = options || {};
    _this._data = new _Map();
    _this.length = 0;
    _this._idProp = _this._options.fieldId || "id";
    if (data2 && data2.length) {
      _this.add(data2);
    }
    _this.setOptions(options);
    return _this;
  }
  _createClass(DataSet2, [{
    key: "idProp",
    get: (
      /** Flush all queued calls. */
      /** @inheritDoc */
      /** @inheritDoc */
      function get2() {
        return this._idProp;
      }
    )
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      if (options && options.queue !== void 0) {
        if (options.queue === false) {
          if (this._queue) {
            this._queue.destroy();
            this._queue = null;
          }
        } else {
          if (!this._queue) {
            this._queue = Queue.extend(this, {
              replace: ["add", "update", "remove"]
            });
          }
          if (options.queue && typeof options.queue === "object") {
            this._queue.setOptions(options.queue);
          }
        }
      }
    }
    /**
     * Add a data item or an array with items.
     *
     * After the items are added to the DataSet, the DataSet will trigger an event `add`. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
     *
     * ## Example
     *
     * ```javascript
     * // create a DataSet
     * const data = new vis.DataSet()
     *
     * // add items
     * const ids = data.add([
     *   { id: 1, text: 'item 1' },
     *   { id: 2, text: 'item 2' },
     *   { text: 'item without an id' }
     * ])
     *
     * console.log(ids) // [1, 2, '<UUIDv4>']
     * ```
     *
     * @param data - Items to be added (ids will be generated if missing).
     * @param senderId - Sender id.
     * @returns addedIds - Array with the ids (generated if not present) of the added items.
     * @throws When an item with the same id as any of the added items already exists.
     */
  }, {
    key: "add",
    value: function add(data2, senderId) {
      var _this2 = this;
      var addedIds = [];
      var id2;
      if (_Array$isArray(data2)) {
        var idsToAdd = _mapInstanceProperty(data2).call(data2, function(d) {
          return d[_this2._idProp];
        });
        if (_someInstanceProperty(idsToAdd).call(idsToAdd, function(id3) {
          return _this2._data.has(id3);
        })) {
          throw new Error("A duplicate id was found in the parameter array.");
        }
        for (var i = 0, len = data2.length; i < len; i++) {
          id2 = this._addItem(data2[i]);
          addedIds.push(id2);
        }
      } else if (data2 && typeof data2 === "object") {
        id2 = this._addItem(data2);
        addedIds.push(id2);
      } else {
        throw new Error("Unknown dataType");
      }
      if (addedIds.length) {
        this._trigger("add", {
          items: addedIds
        }, senderId);
      }
      return addedIds;
    }
    /**
     * Update existing items. When an item does not exist, it will be created.
     *
     * @remarks
     * The provided properties will be merged in the existing item. When an item does not exist, it will be created.
     *
     * After the items are updated, the DataSet will trigger an event `add` for the added items, and an event `update`. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
     *
     * ## Example
     *
     * ```javascript
     * // create a DataSet
     * const data = new vis.DataSet([
     *   { id: 1, text: 'item 1' },
     *   { id: 2, text: 'item 2' },
     *   { id: 3, text: 'item 3' }
     * ])
     *
     * // update items
     * const ids = data.update([
     *   { id: 2, text: 'item 2 (updated)' },
     *   { id: 4, text: 'item 4 (new)' }
     * ])
     *
     * console.log(ids) // [2, 4]
     * ```
     *
     * ## Warning for TypeScript users
     * This method may introduce partial items into the data set. Use add or updateOnly instead for better type safety.
     * @param data - Items to be updated (if the id is already present) or added (if the id is missing).
     * @param senderId - Sender id.
     * @returns updatedIds - The ids of the added (these may be newly generated if there was no id in the item from the data) or updated items.
     * @throws When the supplied data is neither an item nor an array of items.
     */
  }, {
    key: "update",
    value: function update(data2, senderId) {
      var _this3 = this;
      var addedIds = [];
      var updatedIds = [];
      var oldData = [];
      var updatedData = [];
      var idProp = this._idProp;
      var addOrUpdate = function addOrUpdate2(item) {
        var origId = item[idProp];
        if (origId != null && _this3._data.has(origId)) {
          var fullItem = item;
          var oldItem = _Object$assign({}, _this3._data.get(origId));
          var id2 = _this3._updateItem(fullItem);
          updatedIds.push(id2);
          updatedData.push(fullItem);
          oldData.push(oldItem);
        } else {
          var _id = _this3._addItem(item);
          addedIds.push(_id);
        }
      };
      if (_Array$isArray(data2)) {
        for (var i = 0, len = data2.length; i < len; i++) {
          if (data2[i] && typeof data2[i] === "object") {
            addOrUpdate(data2[i]);
          } else {
            console.warn("Ignoring input item, which is not an object at index " + i);
          }
        }
      } else if (data2 && typeof data2 === "object") {
        addOrUpdate(data2);
      } else {
        throw new Error("Unknown dataType");
      }
      if (addedIds.length) {
        this._trigger("add", {
          items: addedIds
        }, senderId);
      }
      if (updatedIds.length) {
        var props = {
          items: updatedIds,
          oldData,
          data: updatedData
        };
        this._trigger("update", props, senderId);
      }
      return _concatInstanceProperty(addedIds).call(addedIds, updatedIds);
    }
    /**
     * Update existing items. When an item does not exist, an error will be thrown.
     *
     * @remarks
     * The provided properties will be deeply merged into the existing item.
     * When an item does not exist (id not present in the data set or absent), an error will be thrown and nothing will be changed.
     *
     * After the items are updated, the DataSet will trigger an event `update`.
     * When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
     *
     * ## Example
     *
     * ```javascript
     * // create a DataSet
     * const data = new vis.DataSet([
     *   { id: 1, text: 'item 1' },
     *   { id: 2, text: 'item 2' },
     *   { id: 3, text: 'item 3' },
     * ])
     *
     * // update items
     * const ids = data.update([
     *   { id: 2, text: 'item 2 (updated)' }, // works
     *   // { id: 4, text: 'item 4 (new)' }, // would throw
     *   // { text: 'item 4 (new)' }, // would also throw
     * ])
     *
     * console.log(ids) // [2]
     * ```
     * @param data - Updates (the id and optionally other props) to the items in this data set.
     * @param senderId - Sender id.
     * @returns updatedIds - The ids of the updated items.
     * @throws When the supplied data is neither an item nor an array of items, when the ids are missing.
     */
  }, {
    key: "updateOnly",
    value: function updateOnly(data2, senderId) {
      var _context, _this4 = this;
      if (!_Array$isArray(data2)) {
        data2 = [data2];
      }
      var updateEventData = _mapInstanceProperty(_context = _mapInstanceProperty(data2).call(data2, function(update) {
        var oldData = _this4._data.get(update[_this4._idProp]);
        if (oldData == null) {
          throw new Error("Updating non-existent items is not allowed.");
        }
        return {
          oldData,
          update
        };
      })).call(_context, function(_ref) {
        var oldData = _ref.oldData, update = _ref.update;
        var id2 = oldData[_this4._idProp];
        var updatedData = pureDeepObjectAssign(oldData, update);
        _this4._data.set(id2, updatedData);
        return {
          id: id2,
          oldData,
          updatedData
        };
      });
      if (updateEventData.length) {
        var props = {
          items: _mapInstanceProperty(updateEventData).call(updateEventData, function(value) {
            return value.id;
          }),
          oldData: _mapInstanceProperty(updateEventData).call(updateEventData, function(value) {
            return value.oldData;
          }),
          data: _mapInstanceProperty(updateEventData).call(updateEventData, function(value) {
            return value.updatedData;
          })
        };
        this._trigger("update", props, senderId);
        return props.items;
      } else {
        return [];
      }
    }
    /** @inheritDoc */
  }, {
    key: "get",
    value: function get2(first, second) {
      var id2 = void 0;
      var ids = void 0;
      var options = void 0;
      if (isId(first)) {
        id2 = first;
        options = second;
      } else if (_Array$isArray(first)) {
        ids = first;
        options = second;
      } else {
        options = first;
      }
      var returnType = options && options.returnType === "Object" ? "Object" : "Array";
      var filter3 = options && _filterInstanceProperty(options);
      var items = [];
      var item = void 0;
      var itemIds = void 0;
      var itemId = void 0;
      if (id2 != null) {
        item = this._data.get(id2);
        if (item && filter3 && !filter3(item)) {
          item = void 0;
        }
      } else if (ids != null) {
        for (var i = 0, len = ids.length; i < len; i++) {
          item = this._data.get(ids[i]);
          if (item != null && (!filter3 || filter3(item))) {
            items.push(item);
          }
        }
      } else {
        var _context2;
        itemIds = _toConsumableArray(_keysInstanceProperty(_context2 = this._data).call(_context2));
        for (var _i = 0, _len = itemIds.length; _i < _len; _i++) {
          itemId = itemIds[_i];
          item = this._data.get(itemId);
          if (item != null && (!filter3 || filter3(item))) {
            items.push(item);
          }
        }
      }
      if (options && options.order && id2 == void 0) {
        this._sort(items, options.order);
      }
      if (options && options.fields) {
        var fields = options.fields;
        if (id2 != void 0 && item != null) {
          item = this._filterFields(item, fields);
        } else {
          for (var _i2 = 0, _len2 = items.length; _i2 < _len2; _i2++) {
            items[_i2] = this._filterFields(items[_i2], fields);
          }
        }
      }
      if (returnType == "Object") {
        var result = {};
        for (var _i3 = 0, _len3 = items.length; _i3 < _len3; _i3++) {
          var resultant = items[_i3];
          var _id2 = resultant[this._idProp];
          result[_id2] = resultant;
        }
        return result;
      } else {
        if (id2 != null) {
          var _item;
          return (_item = item) !== null && _item !== void 0 ? _item : null;
        } else {
          return items;
        }
      }
    }
    /** @inheritDoc */
  }, {
    key: "getIds",
    value: function getIds(options) {
      var data2 = this._data;
      var filter3 = options && _filterInstanceProperty(options);
      var order = options && options.order;
      var itemIds = _toConsumableArray(_keysInstanceProperty(data2).call(data2));
      var ids = [];
      if (filter3) {
        if (order) {
          var items = [];
          for (var i = 0, len = itemIds.length; i < len; i++) {
            var id2 = itemIds[i];
            var item = this._data.get(id2);
            if (item != null && filter3(item)) {
              items.push(item);
            }
          }
          this._sort(items, order);
          for (var _i4 = 0, _len4 = items.length; _i4 < _len4; _i4++) {
            ids.push(items[_i4][this._idProp]);
          }
        } else {
          for (var _i5 = 0, _len5 = itemIds.length; _i5 < _len5; _i5++) {
            var _id3 = itemIds[_i5];
            var _item2 = this._data.get(_id3);
            if (_item2 != null && filter3(_item2)) {
              ids.push(_item2[this._idProp]);
            }
          }
        }
      } else {
        if (order) {
          var _items = [];
          for (var _i6 = 0, _len6 = itemIds.length; _i6 < _len6; _i6++) {
            var _id4 = itemIds[_i6];
            _items.push(data2.get(_id4));
          }
          this._sort(_items, order);
          for (var _i7 = 0, _len7 = _items.length; _i7 < _len7; _i7++) {
            ids.push(_items[_i7][this._idProp]);
          }
        } else {
          for (var _i8 = 0, _len8 = itemIds.length; _i8 < _len8; _i8++) {
            var _id5 = itemIds[_i8];
            var _item3 = data2.get(_id5);
            if (_item3 != null) {
              ids.push(_item3[this._idProp]);
            }
          }
        }
      }
      return ids;
    }
    /** @inheritDoc */
  }, {
    key: "getDataSet",
    value: function getDataSet() {
      return this;
    }
    /** @inheritDoc */
  }, {
    key: "forEach",
    value: function forEach3(callback, options) {
      var filter3 = options && _filterInstanceProperty(options);
      var data2 = this._data;
      var itemIds = _toConsumableArray(_keysInstanceProperty(data2).call(data2));
      if (options && options.order) {
        var items = this.get(options);
        for (var i = 0, len = items.length; i < len; i++) {
          var item = items[i];
          var id2 = item[this._idProp];
          callback(item, id2);
        }
      } else {
        for (var _i9 = 0, _len9 = itemIds.length; _i9 < _len9; _i9++) {
          var _id6 = itemIds[_i9];
          var _item4 = this._data.get(_id6);
          if (_item4 != null && (!filter3 || filter3(_item4))) {
            callback(_item4, _id6);
          }
        }
      }
    }
    /** @inheritDoc */
  }, {
    key: "map",
    value: function map3(callback, options) {
      var filter3 = options && _filterInstanceProperty(options);
      var mappedItems = [];
      var data2 = this._data;
      var itemIds = _toConsumableArray(_keysInstanceProperty(data2).call(data2));
      for (var i = 0, len = itemIds.length; i < len; i++) {
        var id2 = itemIds[i];
        var item = this._data.get(id2);
        if (item != null && (!filter3 || filter3(item))) {
          mappedItems.push(callback(item, id2));
        }
      }
      if (options && options.order) {
        this._sort(mappedItems, options.order);
      }
      return mappedItems;
    }
    /**
     * Filter the fields of an item.
     *
     * @param item - The item whose fields should be filtered.
     * @param fields - The names of the fields that will be kept.
     * @typeParam K - Field name type.
     * @returns The item without any additional fields.
     */
  }, {
    key: "_filterFields",
    value: function _filterFields(item, fields) {
      var _context3;
      if (!item) {
        return item;
      }
      return _reduceInstanceProperty(_context3 = _Array$isArray(fields) ? (
        // Use the supplied array
        fields
      ) : (
        // Use the keys of the supplied object
        _Object$keys(fields)
      )).call(_context3, function(filteredItem, field) {
        filteredItem[field] = item[field];
        return filteredItem;
      }, {});
    }
    /**
     * Sort the provided array with items.
     *
     * @param items - Items to be sorted in place.
     * @param order - A field name or custom sort function.
     * @typeParam T - The type of the items in the items array.
     */
  }, {
    key: "_sort",
    value: function _sort(items, order) {
      if (typeof order === "string") {
        var name = order;
        _sortInstanceProperty(items).call(items, function(a, b) {
          var av = a[name];
          var bv = b[name];
          return av > bv ? 1 : av < bv ? -1 : 0;
        });
      } else if (typeof order === "function") {
        _sortInstanceProperty(items).call(items, order);
      } else {
        throw new TypeError("Order must be a function or a string");
      }
    }
    /**
     * Remove an item or multiple items by “reference” (only the id is used) or by id.
     *
     * The method ignores removal of non-existing items, and returns an array containing the ids of the items which are actually removed from the DataSet.
     *
     * After the items are removed, the DataSet will trigger an event `remove` for the removed items. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
     *
     * ## Example
     * ```javascript
     * // create a DataSet
     * const data = new vis.DataSet([
     *   { id: 1, text: 'item 1' },
     *   { id: 2, text: 'item 2' },
     *   { id: 3, text: 'item 3' }
     * ])
     *
     * // remove items
     * const ids = data.remove([2, { id: 3 }, 4])
     *
     * console.log(ids) // [2, 3]
     * ```
     *
     * @param id - One or more items or ids of items to be removed.
     * @param senderId - Sender id.
     * @returns The ids of the removed items.
     */
  }, {
    key: "remove",
    value: function remove(id2, senderId) {
      var removedIds = [];
      var removedItems = [];
      var ids = _Array$isArray(id2) ? id2 : [id2];
      for (var i = 0, len = ids.length; i < len; i++) {
        var item = this._remove(ids[i]);
        if (item) {
          var itemId = item[this._idProp];
          if (itemId != null) {
            removedIds.push(itemId);
            removedItems.push(item);
          }
        }
      }
      if (removedIds.length) {
        this._trigger("remove", {
          items: removedIds,
          oldData: removedItems
        }, senderId);
      }
      return removedIds;
    }
    /**
     * Remove an item by its id or reference.
     *
     * @param id - Id of an item or the item itself.
     * @returns The removed item if removed, null otherwise.
     */
  }, {
    key: "_remove",
    value: function _remove(id2) {
      var ident;
      if (isId(id2)) {
        ident = id2;
      } else if (id2 && typeof id2 === "object") {
        ident = id2[this._idProp];
      }
      if (ident != null && this._data.has(ident)) {
        var item = this._data.get(ident) || null;
        this._data.delete(ident);
        --this.length;
        return item;
      }
      return null;
    }
    /**
     * Clear the entire data set.
     *
     * After the items are removed, the {@link DataSet} will trigger an event `remove` for all removed items. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
     *
     * @param senderId - Sender id.
     * @returns removedIds - The ids of all removed items.
     */
  }, {
    key: "clear",
    value: function clear2(senderId) {
      var _context4;
      var ids = _toConsumableArray(_keysInstanceProperty(_context4 = this._data).call(_context4));
      var items = [];
      for (var i = 0, len = ids.length; i < len; i++) {
        items.push(this._data.get(ids[i]));
      }
      this._data.clear();
      this.length = 0;
      this._trigger("remove", {
        items: ids,
        oldData: items
      }, senderId);
      return ids;
    }
    /**
     * Find the item with maximum value of a specified field.
     *
     * @param field - Name of the property that should be searched for max value.
     * @returns Item containing max value, or null if no items.
     */
  }, {
    key: "max",
    value: function max2(field) {
      var _context5;
      var max3 = null;
      var maxField = null;
      var _iterator = _createForOfIteratorHelper$1(_valuesInstanceProperty(_context5 = this._data).call(_context5)), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var item = _step.value;
          var itemField = item[field];
          if (typeof itemField === "number" && (maxField == null || itemField > maxField)) {
            max3 = item;
            maxField = itemField;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return max3 || null;
    }
    /**
     * Find the item with minimum value of a specified field.
     *
     * @param field - Name of the property that should be searched for min value.
     * @returns Item containing min value, or null if no items.
     */
  }, {
    key: "min",
    value: function min2(field) {
      var _context6;
      var min3 = null;
      var minField = null;
      var _iterator2 = _createForOfIteratorHelper$1(_valuesInstanceProperty(_context6 = this._data).call(_context6)), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var item = _step2.value;
          var itemField = item[field];
          if (typeof itemField === "number" && (minField == null || itemField < minField)) {
            min3 = item;
            minField = itemField;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return min3 || null;
    }
    /**
     * Find all distinct values of a specified field
     *
     * @param prop - The property name whose distinct values should be returned.
     * @returns Unordered array containing all distinct values. Items without specified property are ignored.
     */
  }, {
    key: "distinct",
    value: function distinct(prop) {
      var data2 = this._data;
      var itemIds = _toConsumableArray(_keysInstanceProperty(data2).call(data2));
      var values2 = [];
      var count = 0;
      for (var i = 0, len = itemIds.length; i < len; i++) {
        var id2 = itemIds[i];
        var item = data2.get(id2);
        var value = item[prop];
        var exists = false;
        for (var j = 0; j < count; j++) {
          if (values2[j] == value) {
            exists = true;
            break;
          }
        }
        if (!exists && value !== void 0) {
          values2[count] = value;
          count++;
        }
      }
      return values2;
    }
    /**
     * Add a single item. Will fail when an item with the same id already exists.
     *
     * @param item - A new item to be added.
     * @returns Added item's id. An id is generated when it is not present in the item.
     */
  }, {
    key: "_addItem",
    value: function _addItem(item) {
      var fullItem = ensureFullItem(item, this._idProp);
      var id2 = fullItem[this._idProp];
      if (this._data.has(id2)) {
        throw new Error("Cannot add item: item with id " + id2 + " already exists");
      }
      this._data.set(id2, fullItem);
      ++this.length;
      return id2;
    }
    /**
     * Update a single item: merge with existing item.
     * Will fail when the item has no id, or when there does not exist an item with the same id.
     *
     * @param update - The new item
     * @returns The id of the updated item.
     */
  }, {
    key: "_updateItem",
    value: function _updateItem(update) {
      var id2 = update[this._idProp];
      if (id2 == null) {
        throw new Error("Cannot update item: item has no id (item: " + _JSON$stringify(update) + ")");
      }
      var item = this._data.get(id2);
      if (!item) {
        throw new Error("Cannot update item: no item with id " + id2 + " found");
      }
      this._data.set(id2, _objectSpread(_objectSpread({}, item), update));
      return id2;
    }
    /** @inheritDoc */
  }, {
    key: "stream",
    value: function stream(ids) {
      if (ids) {
        var data2 = this._data;
        return new DataStream({
          [_Symbol$iterator]() {
            return _regeneratorRuntime.mark(function _callee() {
              var _iterator3, _step3, id2, item;
              return _regeneratorRuntime.wrap(function _callee$(_context7) {
                while (1)
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _iterator3 = _createForOfIteratorHelper$1(ids);
                      _context7.prev = 1;
                      _iterator3.s();
                    case 3:
                      if ((_step3 = _iterator3.n()).done) {
                        _context7.next = 11;
                        break;
                      }
                      id2 = _step3.value;
                      item = data2.get(id2);
                      if (!(item != null)) {
                        _context7.next = 9;
                        break;
                      }
                      _context7.next = 9;
                      return [id2, item];
                    case 9:
                      _context7.next = 3;
                      break;
                    case 11:
                      _context7.next = 16;
                      break;
                    case 13:
                      _context7.prev = 13;
                      _context7.t0 = _context7["catch"](1);
                      _iterator3.e(_context7.t0);
                    case 16:
                      _context7.prev = 16;
                      _iterator3.f();
                      return _context7.finish(16);
                    case 19:
                    case "end":
                      return _context7.stop();
                  }
              }, _callee, null, [[1, 13, 16, 19]]);
            })();
          }
        });
      } else {
        var _context8;
        return new DataStream({
          [_Symbol$iterator]: _bindInstanceProperty$1(_context8 = _entriesInstanceProperty(this._data)).call(_context8, this._data)
        });
      }
    }
  }]);
  return DataSet2;
}(DataSetPart);
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"];
  if (!it) {
    if (_Array$isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  var _context5;
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = _sliceInstanceProperty(_context5 = Object.prototype.toString.call(o)).call(_context5, 8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return _Array$from$1(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = _Reflect$construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct)
    return false;
  if (_Reflect$construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var DataView = function(_DataSetPart) {
  _inherits(DataView2, _DataSetPart);
  var _super = _createSuper(DataView2);
  function DataView2(data2, options) {
    var _context;
    var _this;
    _classCallCheck(this, DataView2);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "length", 0);
    _defineProperty(_assertThisInitialized(_this), "_ids", new _Set());
    _this._options = options || {};
    _this._listener = _bindInstanceProperty$1(_context = _this._onEvent).call(_context, _assertThisInitialized(_this));
    _this.setData(data2);
    return _this;
  }
  _createClass(DataView2, [{
    key: "idProp",
    get: (
      /** @inheritDoc */
      function get2() {
        return this.getDataSet().idProp;
      }
    )
  }, {
    key: "setData",
    value: function setData(data2) {
      if (this._data) {
        if (this._data.off) {
          this._data.off("*", this._listener);
        }
        var ids = this._data.getIds({
          filter: _filterInstanceProperty(this._options)
        });
        var items = this._data.get(ids);
        this._ids.clear();
        this.length = 0;
        this._trigger("remove", {
          items: ids,
          oldData: items
        });
      }
      if (data2 != null) {
        this._data = data2;
        var _ids = this._data.getIds({
          filter: _filterInstanceProperty(this._options)
        });
        for (var i = 0, len = _ids.length; i < len; i++) {
          var id2 = _ids[i];
          this._ids.add(id2);
        }
        this.length = _ids.length;
        this._trigger("add", {
          items: _ids
        });
      } else {
        this._data = new DataSet();
      }
      if (this._data.on) {
        this._data.on("*", this._listener);
      }
    }
    /**
     * Refresh the DataView.
     * Useful when the DataView has a filter function containing a variable parameter.
     */
  }, {
    key: "refresh",
    value: function refresh() {
      var ids = this._data.getIds({
        filter: _filterInstanceProperty(this._options)
      });
      var oldIds = _toConsumableArray(this._ids);
      var newIds = {};
      var addedIds = [];
      var removedIds = [];
      var removedItems = [];
      for (var i = 0, len = ids.length; i < len; i++) {
        var id2 = ids[i];
        newIds[id2] = true;
        if (!this._ids.has(id2)) {
          addedIds.push(id2);
          this._ids.add(id2);
        }
      }
      for (var _i = 0, _len = oldIds.length; _i < _len; _i++) {
        var _id = oldIds[_i];
        var item = this._data.get(_id);
        if (item == null) {
          console.error("If you see this, report it please.");
        } else if (!newIds[_id]) {
          removedIds.push(_id);
          removedItems.push(item);
          this._ids.delete(_id);
        }
      }
      this.length += addedIds.length - removedIds.length;
      if (addedIds.length) {
        this._trigger("add", {
          items: addedIds
        });
      }
      if (removedIds.length) {
        this._trigger("remove", {
          items: removedIds,
          oldData: removedItems
        });
      }
    }
    /** @inheritDoc */
  }, {
    key: "get",
    value: function get2(first, second) {
      if (this._data == null) {
        return null;
      }
      var ids = null;
      var options;
      if (isId(first) || _Array$isArray(first)) {
        ids = first;
        options = second;
      } else {
        options = first;
      }
      var viewOptions = _Object$assign({}, this._options, options);
      var thisFilter = _filterInstanceProperty(this._options);
      var optionsFilter = options && _filterInstanceProperty(options);
      if (thisFilter && optionsFilter) {
        viewOptions.filter = function(item) {
          return thisFilter(item) && optionsFilter(item);
        };
      }
      if (ids == null) {
        return this._data.get(viewOptions);
      } else {
        return this._data.get(ids, viewOptions);
      }
    }
    /** @inheritDoc */
  }, {
    key: "getIds",
    value: function getIds(options) {
      if (this._data.length) {
        var defaultFilter = _filterInstanceProperty(this._options);
        var optionsFilter = options != null ? _filterInstanceProperty(options) : null;
        var filter3;
        if (optionsFilter) {
          if (defaultFilter) {
            filter3 = function filter4(item) {
              return defaultFilter(item) && optionsFilter(item);
            };
          } else {
            filter3 = optionsFilter;
          }
        } else {
          filter3 = defaultFilter;
        }
        return this._data.getIds({
          filter: filter3,
          order: options && options.order
        });
      } else {
        return [];
      }
    }
    /** @inheritDoc */
  }, {
    key: "forEach",
    value: function forEach3(callback, options) {
      if (this._data) {
        var _context2;
        var defaultFilter = _filterInstanceProperty(this._options);
        var optionsFilter = options && _filterInstanceProperty(options);
        var filter3;
        if (optionsFilter) {
          if (defaultFilter) {
            filter3 = function filter4(item) {
              return defaultFilter(item) && optionsFilter(item);
            };
          } else {
            filter3 = optionsFilter;
          }
        } else {
          filter3 = defaultFilter;
        }
        _forEachInstanceProperty(_context2 = this._data).call(_context2, callback, {
          filter: filter3,
          order: options && options.order
        });
      }
    }
    /** @inheritDoc */
  }, {
    key: "map",
    value: function map3(callback, options) {
      if (this._data) {
        var _context3;
        var defaultFilter = _filterInstanceProperty(this._options);
        var optionsFilter = options && _filterInstanceProperty(options);
        var filter3;
        if (optionsFilter) {
          if (defaultFilter) {
            filter3 = function filter4(item) {
              return defaultFilter(item) && optionsFilter(item);
            };
          } else {
            filter3 = optionsFilter;
          }
        } else {
          filter3 = defaultFilter;
        }
        return _mapInstanceProperty(_context3 = this._data).call(_context3, callback, {
          filter: filter3,
          order: options && options.order
        });
      } else {
        return [];
      }
    }
    /** @inheritDoc */
  }, {
    key: "getDataSet",
    value: function getDataSet() {
      return this._data.getDataSet();
    }
    /** @inheritDoc */
  }, {
    key: "stream",
    value: function stream(ids) {
      var _context4;
      return this._data.stream(ids || {
        [_Symbol$iterator]: _bindInstanceProperty$1(_context4 = _keysInstanceProperty(this._ids)).call(_context4, this._ids)
      });
    }
    /**
     * Render the instance unusable prior to garbage collection.
     *
     * @remarks
     * The intention of this method is to help discover scenarios where the data
     * view is being used when the programmer thinks it has been garbage collected
     * already. It's stricter version of `dataView.setData(null)`.
     */
  }, {
    key: "dispose",
    value: function dispose() {
      var _this$_data;
      if ((_this$_data = this._data) !== null && _this$_data !== void 0 && _this$_data.off) {
        this._data.off("*", this._listener);
      }
      var message = "This data view has already been disposed of.";
      var replacement2 = {
        get: function get2() {
          throw new Error(message);
        },
        set: function set2() {
          throw new Error(message);
        },
        configurable: false
      };
      var _iterator = _createForOfIteratorHelper(_Reflect$ownKeys(DataView2.prototype)), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var key = _step.value;
          _Object$defineProperty(this, key, replacement2);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * Event listener. Will propagate all events from the connected data set to the subscribers of the DataView, but will filter the items and only trigger when there are changes in the filtered data set.
     *
     * @param event - The name of the event.
     * @param params - Parameters of the event.
     * @param senderId - Id supplied by the sender.
     */
  }, {
    key: "_onEvent",
    value: function _onEvent(event, params, senderId) {
      if (!params || !params.items || !this._data) {
        return;
      }
      var ids = params.items;
      var addedIds = [];
      var updatedIds = [];
      var removedIds = [];
      var oldItems = [];
      var updatedItems = [];
      var removedItems = [];
      switch (event) {
        case "add":
          for (var i = 0, len = ids.length; i < len; i++) {
            var id2 = ids[i];
            var item = this.get(id2);
            if (item) {
              this._ids.add(id2);
              addedIds.push(id2);
            }
          }
          break;
        case "update":
          for (var _i2 = 0, _len2 = ids.length; _i2 < _len2; _i2++) {
            var _id2 = ids[_i2];
            var _item = this.get(_id2);
            if (_item) {
              if (this._ids.has(_id2)) {
                updatedIds.push(_id2);
                updatedItems.push(params.data[_i2]);
                oldItems.push(params.oldData[_i2]);
              } else {
                this._ids.add(_id2);
                addedIds.push(_id2);
              }
            } else {
              if (this._ids.has(_id2)) {
                this._ids.delete(_id2);
                removedIds.push(_id2);
                removedItems.push(params.oldData[_i2]);
              }
            }
          }
          break;
        case "remove":
          for (var _i3 = 0, _len3 = ids.length; _i3 < _len3; _i3++) {
            var _id3 = ids[_i3];
            if (this._ids.has(_id3)) {
              this._ids.delete(_id3);
              removedIds.push(_id3);
              removedItems.push(params.oldData[_i3]);
            }
          }
          break;
      }
      this.length += addedIds.length - removedIds.length;
      if (addedIds.length) {
        this._trigger("add", {
          items: addedIds
        }, senderId);
      }
      if (updatedIds.length) {
        this._trigger("update", {
          items: updatedIds,
          oldData: oldItems,
          data: updatedItems
        }, senderId);
      }
      if (removedIds.length) {
        this._trigger("remove", {
          items: removedIds,
          oldData: removedItems
        }, senderId);
      }
    }
  }]);
  return DataView2;
}(DataSetPart);
function isDataSetLike(idProp, v) {
  return typeof v === "object" && v !== null && idProp === v.idProp && typeof v.add === "function" && typeof v.clear === "function" && typeof v.distinct === "function" && typeof _forEachInstanceProperty(v) === "function" && typeof v.get === "function" && typeof v.getDataSet === "function" && typeof v.getIds === "function" && typeof v.length === "number" && typeof _mapInstanceProperty(v) === "function" && typeof v.max === "function" && typeof v.min === "function" && typeof v.off === "function" && typeof v.on === "function" && typeof v.remove === "function" && typeof v.setOptions === "function" && typeof v.stream === "function" && typeof v.update === "function" && typeof v.updateOnly === "function";
}
function isDataViewLike(idProp, v) {
  return typeof v === "object" && v !== null && idProp === v.idProp && typeof _forEachInstanceProperty(v) === "function" && typeof v.get === "function" && typeof v.getDataSet === "function" && typeof v.getIds === "function" && typeof v.length === "number" && typeof _mapInstanceProperty(v) === "function" && typeof v.off === "function" && typeof v.on === "function" && typeof v.stream === "function" && isDataSetLike(idProp, v.getDataSet());
}

export {
  createNewDataPipeFrom,
  DELETE,
  Queue,
  DataStream,
  DataSet,
  DataView,
  isDataSetLike,
  isDataViewLike
};
/*! Bundled license information:

vis-data/peer/esm/vis-data.js:
  (**
   * vis-data
   * http://visjs.org/
   *
   * Manage unstructured data using DataSet. Add, update, and remove data, and listen for changes in the data.
   *
   * @version 7.1.9
   * @date    2023-11-24T17:53:34.179Z
   *
   * @copyright (c) 2011-2017 Almende B.V, http://almende.com
   * @copyright (c) 2017-2019 visjs contributors, https://github.com/visjs
   *
   * @license
   * vis.js is dual licensed under both
   *
   *   1. The Apache 2.0 License
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   *   and
   *
   *   2. The MIT License
   *      http://opensource.org/licenses/MIT
   *
   * vis.js may be distributed under either license.
   *)
  (*! Hammer.JS - v2.0.17-rc - 2019-12-16
   * http://naver.github.io/egjs
   *
   * Forked By Naver egjs
   * Copyright (c) hammerjs
   * Licensed under the MIT license *)
*/
//# sourceMappingURL=chunk-NQN3UVAT.js.map
