// specific-vfx.js

/* global TokenMagic */

export const tokenmagicVFX = {

  // prone
  "prone": {
    apply: async (token) => {
      const effect = [
        {
          filterType: "transform",
          filterId: "imc-prone",
          rotation: 90,
          animated: {
            rotation: { active: true, animType: "none" }
          }
        }
      ];

      if (!TokenMagic.hasFilterId(token, "imc-prone")) {
        await token.TMFXaddUpdateFilters(effect);
      }

      console.log("imc: Applied prone");
    },

    remove: async (token) => {
      await TokenMagic.deleteFilters(token, "imc-prone");
      console.log("imc: Removed prone");
    }
  },

    //BOLSTER
"bolster": {
  apply: async (token) => {
    const effect = [
      {
        filterType: "transform",
        filterId: "imc-bolster-bulge",
        bpRadiusPercent: 60,     // how wide the bulge is
        padding: 100,            // prevents clipping
        animated: {
          bpStrength: {
            active: true,
            animType: "cosOscillation",
            val1: 0.0,           // minimum bulge
            val2: 0.15,          // maximum bulge
            loopDuration: 6000   // speed of pulsing
          }
        }
      }
    ];

    if (!TokenMagic.hasFilterId(token, "imc-bolster-bulge")) {
      await token.TMFXaddUpdateFilters(effect);
    }

    console.log("imc: Applied Bolster bulge effect");
  },

  remove: async (token) => {
    await TokenMagic.deleteFilters(token, "imc-bolster-bulge");
    console.log("imc: Removed Bolster bulge effect");
  }
},

  //HIDDEN
 "hidden": {
  apply: async (token) => {
    const effect = [{
    filterType: "shadow",
    filterId: "imc-hidden",
    rotation: 35,
    blur: 2,
    quality: 5,
    distance: 20,
    alpha: 0.5,
    padding: 10,
    shadowOnly: false,
    color: 0x000000,
    zOrder: 6000,
    animated:
    {
        blur:     
        { 
           active: true, 
           loopDuration: 6000, 
           animType: "syncCosOscillation", 
           val1: 2, 
           val2: 4
        },
        rotation:
        {
           active: true,
           loopDuration: 2000,
           animType: "syncSinOscillation",
           val1: 33,
           val2: 37
        }
     }
}];

    if (!TokenMagic.hasFilterId(token, "imc-hidden")) {
      await token.TMFXaddUpdateFilters(effect);
    }

    console.log("imc: Applied hidden effect");
  },

  remove: async (token) => {
    await TokenMagic.deleteFilters(token, "imc-hidden");
    console.log("imc: Removed hidden effect");
  }
},

//SHREDDED
"shredded": {
  apply: async (token) => {
    const effect = [{

    filterType: "sprite",
    filterId: "imc-shredded",
    imagePath: "modules/tokenmagic/fx/assets/box.webp",
	inverse: true, //required for sprite visibility
    repeat: true,
    alphaDiscard: true,
    colorize: true,
    color: 0xab9a80,
    inverse: true,
    gridPadding: 1,
    maintainAspectRatio: false,
    maintainScale: false,
    scaleX: 0.16,
    scaleY: 0.16,
    translationX: 0,
    translationY: 0,
    rotation: 65,
    alpha: 0.75,
    top: true,
    animated: {
      rotation: {
        active: false,
        clockWise: false,
        loopDuration: 30000,
        animType: "syncRotation"
      }
    }
  }];
  
     if (!TokenMagic.hasFilterId(token, "imc-shredded")) {
      await token.TMFXaddUpdateFilters(effect);
    }

    console.log("imc: Applied shredded effect");
  },

  remove: async (token) => {
    await TokenMagic.deleteFilters(token, "imc-shredded");
    console.log("imc: Removed shredded effect");
  }
},

//FLYING
"flying": {
  apply: async (token) => {
    const effect = [{
      filterType: "transform",
      filterId: "imc-flying",
      padding: 70,

      // Start position (optional)
      translationY: -5,

      animated: {
        translationY: {
          active: true,
          animType: "cosOscillation",
          loopDuration: 3000,   // speed of bobbing
          val1: 0.15,             // move up
          val2: 0.1               // move down
        }
      }
    }];

    if (!TokenMagic.hasFilterId(token, "imc-flying")) {
      await token.TMFXaddUpdateFilters(effect);
    }

    console.log("imc: Applied flying effect");
  },

  remove: async (token) => {
    await TokenMagic.deleteFilters(token, "imc-flying");
    console.log("imc: Removed flying effect");
  }
},

// SHUTDOWN ROTATION
  "shutdown": {
    apply: async (token) => {
      const effect = [
        {
          filterType: "transform",
          filterId: "shutdown-rotation",
          rotation: -25,
          animated: {
            rotation: { active: true, animType: "none" }
          }
        }
      ];

      if (!TokenMagic.hasFilterId(token, "shutdown-rotation")) {
        await token.TMFXaddUpdateFilters(effect);
      }

      console.log("imc: Applied shutdown rotation");
    },

    remove: async (token) => {
      await TokenMagic.deleteFilters(token, "shutdown-rotation");
      console.log("imc: Removed shutdown rotation");
    }
  },

// ENGAGED
  "engaged": {
    apply: async (token) => {
      const effect = [{
        filterType: "transform",
        filterId: "imc-engaged",
        padding: 50,
        animated:
        {
            translationX:
            {
                animType: "sinOscillation",
                val1: -0.05,
                val2: +0.05,
                loopDuration: 4500,
            },
            translationY:
            {
                animType: "cosOscillation",
                val1: -0.010,
                val2: +0.010,
                loopDuration: 1800,
            }
        }
    }];

      if (!TokenMagic.hasFilterId(token, "imc-engaged")) {
        await token.TMFXaddUpdateFilters(effect);
      }

      console.log("imc: Applied engaged effect");
    },

    remove: async (token) => {
      await TokenMagic.deleteFilters(token, "imc-engaged");
      console.log("imc: Removed engaged effect");
    }
  },
  
  
  // MIA
  "mia": {
    apply: async (token) => {
      const effect = 
[{
    filterType: "adjustment",
    filterId: "imc-mia",
    saturation: 1,
    brightness: 0.5,
    contrast: 1,
    gamma: 1,
    red: 0.2,
    green: 0.2,
    blue: 0.2,
    alpha: 1,
    animated:
    {
        alpha: 
        { 
           active: true, 
           loopDuration: 10000, 
           animType: "syncCosOscillation",
           val1: 0.35,
           val2: 0.35 }
    }
}];

      if (!TokenMagic.hasFilterId(token, "imc-mia")) {
        await token.TMFXaddUpdateFilters(effect);
      }

      console.log("imc: Applied mia effect");
    },

    remove: async (token) => {
      await TokenMagic.deleteFilters(token, "imc-mia");
      console.log("imc: Removed mia effect");
    }
  },
  
  
  // EXPOSED
  "exposed": {
    apply: async (token) => {
      const effect = 
[{
      filterType: "liquid",
      filterId: "imc-exposed",
      color: 0x167800,
      time: 0,
      blend: 5, // PIXI.BLEND_MODES.COLOR_DODGE - verify this is intended
      intensity: 0.0001,
      spectral: false,
      scale: 7,
      alpha: 0.1,
      animated: {
        time: { active: true, speed: 0.0015, animType: "move" },
        intensity: {
          active: true,
          animType: "syncCosOscillation",
          loopDuration: 30000,
          val1: 1,
          val2: 3
        },
        scale: {
          active: true,
          animType: "syncCosOscillation",
          loopDuration: 30000,
          val1: 4,
          val2: 1
        }
      }
}];



      if (!TokenMagic.hasFilterId(token, "imc-exposed")) {
        await token.TMFXaddUpdateFilters(effect);
      }

      console.log("imc: Applied exposed effect");
    },

    remove: async (token) => {
      await TokenMagic.deleteFilters(token, "imc-exposed");
      console.log("imc: Removed exposed effect");
    }
  },
  
  
  
    // IMPAIRED
  "impaired": {
    apply: async (token) => {
      const effect = 
  [{
    filterType: "pixel",
    filterId: "imc-impaired-pixel",
    sizeX: 0.1,
    sizeY: 0.1
	},
	{
     filterType: "transform",
     filterId: "imc-impaired-tilt",
     rotation: -10,
     animated: {
     rotation: { active: true, animType: "none" }
	 }
}];

      if (!TokenMagic.hasFilterId(token, "imc-impaired-pixel")) {
        await token.TMFXaddUpdateFilters(effect);
      }

      console.log("imc: Applied impaired effect");
    },

    remove: async (token) => {
      await TokenMagic.deleteFilters(token, "imc-impaired-pixel");
	  await TokenMagic.deleteFilters(token, "imc-impaired-tilt");
      console.log("imc: Removed impaired effect");
    }
  },
 
  
     // STUNNED
  "stunned": {
    apply: async (token) => {
      const effect = 
 [{
        filterType: "transform",
        filterId: "imc-stunned",
        twRadiusPercent: 70,
        padding: 10,
        animated:
        {
            twRotation:
            {
                animType: "sinOscillation",
                val1: -30,
                val2: +30,
                loopDuration: 5000,
            }
        }
    }];

      if (!TokenMagic.hasFilterId(token, "imc-stunned")) {
        await token.TMFXaddUpdateFilters(effect);
      }

      console.log("imc: Applied stunned effect");
    },

    remove: async (token) => {
      await TokenMagic.deleteFilters(token, "imc-stunned");
      console.log("imc: Removed stunned effect");
    }
  },
  
  
  
       // TEAR DOWN
  "imc-tear-down": {
    apply: async (token) => {
      const effect = 
[{
    filterType: "zapshadow",
    filterId: "imc-tear-down",
    alphaTolerance: 0.75
},
{
    filterType: "xglow",
    filterId: "imc-tear-down0",
    auraType: 2,
    color: 0x050505,
    thickness: 2.7,
    scale: 7,
    time: 0,
    auraIntensity: 5,
    subAuraIntensity: 2,
    threshold: 0.08,
    discard: false,
    animated:
    {
        time : 
        {  
           active: true,
           speed: 0.0012, 
           animType: "move" 
        },
        auraIntensity:
        {
           active: true,
           loopDuration: 6000, 
           animType: "syncCosOscillation", 
           val1:5, 
           val2:0
        },
        subAuraIntensity:
        {
           active: true,
           loopDuration: 6000, 
           animType: "syncCosOscillation", 
           val1:2, 
           val2:0
        },
        color:
        {
           active: true,
           loopDuration: 12000, 
           animType: "syncColorOscillation", 
           val1:0x050505, 
           val2:0x200000
        },
        threshold:
        {
           active: true,
           loopDuration: 3000, 
           animType: "syncCosOscillation", 
           val1:0.02, 
           val2:0.50
        }
    }
}];

      if (!TokenMagic.hasFilterId(token, "imc-tear-down")) {
        await token.TMFXaddUpdateFilters(effect);
      }

      console.log("imc: Applied tear-down effect");
    },

    remove: async (token) => {
      await TokenMagic.deleteFilters(token, "imc-tear-down");
	  await TokenMagic.deleteFilters(token, "imc-tear-down0");
      console.log("imc: Removed tear-down effect");
    }
  },
  
  
  
       // RESISTANCE HEAT
  "resistance_heat": {
    apply: async (token) => {
      const effect = 
	  
[{
    filterType: "adjustment",
    filterId: "imc-resistance_heat",
    saturation: 1.1,
    brightness: 1.08,
    red: 1.05,
    green: 0.95,
    blue: 0.9
  }
  
];

      if (!TokenMagic.hasFilterId(token, "imc-resistance_heat")) {
        await token.TMFXaddUpdateFilters(effect);
      }

      console.log("imc: Applied resistance_heat effect");
    },

    remove: async (token) => {
      await TokenMagic.deleteFilters(token, "imc-resistance_heat");
      console.log("imc: Removed resistance_heat effect");
    }
  },
  
  
  
         // RESISTANCE KINETIC
  "resistance_kinetic": {
    apply: async (token) => {
      const effect = 
	  
[{
    filterType: "adjustment",
    filterId: "imc-resistance_kinetic",
    saturation: 0.9,
    brightness: 1.06,
    contrast: 1.08,
    red: 1,
    green: 1,
    blue: 1
  }
  
];

      if (!TokenMagic.hasFilterId(token, "imc-resistance_kinetic")) {
        await token.TMFXaddUpdateFilters(effect);
      }

      console.log("imc: Applied resistance_kinetic effect");
    },

    remove: async (token) => {
      await TokenMagic.deleteFilters(token, "imc-resistance_kinetic");
      console.log("imc: Removed resistance_kinetic effect");
    }
  },
  
  
  
  
          // RESISTANCE BURN
  "resistance_burn": {
    apply: async (token) => {
      const effect = 
	  
[{
    filterType: "adjustment",
    filterId: "imc-resistance_burn",
    saturation: 1.05,
    brightness: 1.05,
    red: 0.95,
    green: 0.98,
    blue: 1.35
  }
  
];

      if (!TokenMagic.hasFilterId(token, "imc-resistance_burn")) {
        await token.TMFXaddUpdateFilters(effect);
      }

      console.log("imc: Applied resistance_burn effect");
    },

    remove: async (token) => {
      await TokenMagic.deleteFilters(token, "imc-resistance_burn");
      console.log("imc: Removed resistance_burn effect");
    }
  },
  
  
            // RESISTANCE ENERGY
  "resistance_energy": {
    apply: async (token) => {
      const effect = 
	  
[{
    filterType: "adjustment",
    filterId: "imc-resistance_energy",
    saturation: 1.15,
    brightness: 1.06,
    red: 1.05,
    green: 1.02,
    blue: 0.9
  }
  
];

      if (!TokenMagic.hasFilterId(token, "imc-resistance_energy")) {
        await token.TMFXaddUpdateFilters(effect);
      }

      console.log("imc: Applied resistance_energy effect");
    },

    remove: async (token) => {
      await TokenMagic.deleteFilters(token, "imc-resistance_energy");
      console.log("imc: Removed resistance_energy effect");
    }
  },
  
  
  
              // RESISTANCE EXPLOSIVE
  "resistance_explosive": {
    apply: async (token) => {
      const effect = 
	  
[{
    filterType: "adjustment",
	filterId: "imc-resistance_explosive",
	saturation: 0.8,
	brightness: 1.04,
	contrast: 1.15,
	red: 0.98,
	green: 0.98,
	blue: 0.98
  }
  
];

      if (!TokenMagic.hasFilterId(token, "imc-resistance_explosive")) {
        await token.TMFXaddUpdateFilters(effect);
      }

      console.log("imc: Applied resistance_explosive effect");
    },

    remove: async (token) => {
      await TokenMagic.deleteFilters(token, "imc-resistance_explosive");
      console.log("imc: Removed resistance_explosive effect");
    }
  },
  
  
                // LEADERSHIP DIE
  "imc-leadership-die": {
    apply: async (token) => {
      const effect = 
	  
[{
    filterType: "sprite",
    filterId: "imc-leadership-die",
    imagePath: "/modules/lancer-moreconditions/icons/thanh-toan-dice-scifi.png",
    gridPadding: 1,
    scaleX: 0.20,
    scaleY: 0.20,
    colorize: false,
    color: 0x00e1ff,
    inverse: false,
    top: true,
    animated:
        {
          rotation: 
          { 
            active: true,
            clockWise: false, 
            loopDuration: 4000, 
            animType: "syncRotation"
          },
          translationX:
            {
                active: true,
                animType: "cosOscillation",
                val1: 2.0,
                val2: -2.0,
                loopDuration: 8000,
            },
            translationY:
            {
                active: true,
                animType: "sinOscillation",
                val1: 2.0,
                val2: -2.0,
                loopDuration: 8000,
            },
            color:
            {
                active: true,
                animType: "colorOscillation",
                val1: 0xFFFF00,
                val2: 0x00FFFF,
                loopDuration: 8000,
            }
        }
}];

      if (!TokenMagic.hasFilterId(token, "imc-leadership-die")) {
        await token.TMFXaddUpdateFilters(effect);
      }

      console.log("imc: Applied leadership-die effect");
    },

    remove: async (token) => {
      await TokenMagic.deleteFilters(token, "imc-leadership-die");
      console.log("imc: Removed leadership-die effect");
    }
  },
  
  
  //PREPARE
"imc-prepare": {
  apply: async (token) => {
    const effect = [{
      filterType: "transform",
      filterId: "imc-prepare",
      padding: 70,

      // Start position (optional)
      translationY: 0,

      animated: {
        translationY: {
          active: true,
          animType: "cosOscillation",
          loopDuration: 1500,   // speed of bobbing
          val1: 0.01,           // move up
          val2: 0.005            // move down
        }
      }
    }];

    if (!TokenMagic.hasFilterId(token, "imc-prepare")) {
      await token.TMFXaddUpdateFilters(effect);
    }

    console.log("imc: Applied prepare effect");
  },

  remove: async (token) => {
    await TokenMagic.deleteFilters(token, "imc-prepare");
    console.log("imc: Removed prepare effect");
  }
},





  //CORE POWER ACTIVE
"core_power_active": {
  apply: async (token) => {
    const effect = 
	
[{
    filterType: "bevel",
    filterId: "imc-core_power_active",
    rotation: 0,
    thickness: 2,
    lightColor: 0x6fff00,
    lightAlpha: 0.8,
    shadowColor: 0xe1ff00,
    shadowAlpha: 0.5,
    animated :
    {
       rotation: 
       { 
          active: true,
          clockWise: true, 
          loopDuration: 6000, 
          animType: "syncRotation"
       }
    }
}];

    if (!TokenMagic.hasFilterId(token, "imc-core_power_active")) {
      await token.TMFXaddUpdateFilters(effect);
    }

    console.log("imc: Applied core_power_active effect");
  },

  remove: async (token) => {
    await TokenMagic.deleteFilters(token, "imc-core_power_active");
    console.log("imc: Removed core_power_active effect");
  }
},



  //CLIMBING
"imc-climbing": {
  apply: async (token) => {
    const effect = 
	
[{
    filterType: "transform",
    filterId: "imc-climbing",
    padding: 50,
    animated:
    {
        translationY:
        {
            animType: "cosOscillation",
            val1: -0.02,            // much smaller vertical lift
            val2: +0.02,
            loopDuration: 6000,     // ~3× slower
        },
		 rotation:               // rhythmic body tilt (degrees)
        {
            active: true,
            animType: "sinOscillation",
            val1: -1,        // tilt left ~1.5°
            val2: +1,        // tilt right ~1.5°
            loopDuration: 1500,
        }
    }
}];
    if (!TokenMagic.hasFilterId(token, "imc-climbing")) {
      await token.TMFXaddUpdateFilters(effect);
    }

    console.log("imc: Applied climbing effect");
  },

  remove: async (token) => {
    await TokenMagic.deleteFilters(token, "imc-climbing");
    console.log("imc: Removed climbing effect");
  }
},

// add more tokenmagic here

};


