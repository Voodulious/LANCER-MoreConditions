// specific-vfx.js

/* global TokenMagic */

export const tokenmagicVFX = {

  // Prone rotation
  "prone": {
    apply: async (token) => {
      const effect = [
        {
          filterType: "transform",
          filterId: "Prone-rotation",
          rotation: 90,
          animated: {
            rotation: { active: true, animType: "none" }
          }
        }
      ];

      if (!TokenMagic.hasFilterId(token, "Prone-rotation")) {
        await token.TMFXaddUpdateFilters(effect);
      }

      console.log("LMC: Applied Prone rotation");
    },

    remove: async (token) => {
      await TokenMagic.deleteFilters(token, "Prone-rotation");
      console.log("LMC: Removed Prone rotation");
    }
  },

    // --- BOLSTER (new) ---
"bolster": {
  apply: async (token) => {
    const effect = [
      {
        filterType: "transform",
        filterId: "lmc-bolster-bulge",
        bpRadiusPercent: 35,     // how wide the bulge is
        padding: 100,            // prevents clipping
        animated: {
          bpStrength: {
            active: true,
            animType: "cosOscillation",
            val1: 0.0,           // minimum bulge
            val2: 0.25,          // maximum bulge
            loopDuration: 6000   // speed of pulsing
          }
        }
      }
    ];

    if (!TokenMagic.hasFilterId(token, "lmc-bolster-bulge")) {
      await token.TMFXaddUpdateFilters(effect);
    }

    console.log("LMC: Applied Bolster bulge effect");
  },

  remove: async (token) => {
    await TokenMagic.deleteFilters(token, "lmc-bolster-bulge");
    console.log("LMC: Removed Bolster bulge effect");
  }
},

  //HIDDEN
 "hidden": {
  apply: async (token) => {
    const effect = [{
    filterType: "shadow",
    filterId: "lmc-hidden",
    rotation: 35,
    blur: 2,
    quality: 5,
    distance: 20,
    alpha: 0.7,
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

    if (!TokenMagic.hasFilterId(token, "lmc-hidden")) {
      await token.TMFXaddUpdateFilters(effect);
    }

    console.log("LMC: Applied hidden effect");
  },

  remove: async (token) => {
    await TokenMagic.deleteFilters(token, "lmc-hidden");
    console.log("LMC: Removed hidden effect");
  }
},

//SHREDDED
"shredded": {
  apply: async (token) => {
    const effect = [{

    filterType: "sprite",
    filterId: "lmc-shredded",
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
  
     if (!TokenMagic.hasFilterId(token, "lmc-shredded")) {
      await token.TMFXaddUpdateFilters(effect);
    }

    console.log("LMC: Applied shredded effect");
  },

  remove: async (token) => {
    await TokenMagic.deleteFilters(token, "lmc-shredded");
    console.log("LMC: Removed shredded effect");
  }
},

//FLYING
"flying": {
  apply: async (token) => {
    const effect = [{
      filterType: "transform",
      filterId: "lmc-flying",
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

    if (!TokenMagic.hasFilterId(token, "lmc-flying")) {
      await token.TMFXaddUpdateFilters(effect);
    }

    console.log("LMC: Applied flying effect");
  },

  remove: async (token) => {
    await TokenMagic.deleteFilters(token, "lmc-flying");
    console.log("LMC: Removed flying effect");
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

      console.log("LMC: Applied shutdown rotation");
    },

    remove: async (token) => {
      await TokenMagic.deleteFilters(token, "shutdown-rotation");
      console.log("LMC: Removed shutdown rotation");
    }
  },

// ENGAGED
  "engaged": {
    apply: async (token) => {
      const effect = [{
        filterType: "transform",
        filterId: "lmc-engaged",
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

      if (!TokenMagic.hasFilterId(token, "lmc-engaged")) {
        await token.TMFXaddUpdateFilters(effect);
      }

      console.log("LMC: Applied engaged effect");
    },

    remove: async (token) => {
      await TokenMagic.deleteFilters(token, "lmc-engaged");
      console.log("LMC: Removed engaged effect");
    }
  },
  
  
  // MIA
  "mia": {
    apply: async (token) => {
      const effect = 
[{
    filterType: "adjustment",
    filterId: "lmc-mia",
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

      if (!TokenMagic.hasFilterId(token, "lmc-mia")) {
        await token.TMFXaddUpdateFilters(effect);
      }

      console.log("LMC: Applied mia effect");
    },

    remove: async (token) => {
      await TokenMagic.deleteFilters(token, "lmc-mia");
      console.log("LMC: Removed mia effect");
    }
  },
  
  
  // EXPOSED
  "exposed": {
    apply: async (token) => {
      const effect = 
[{
    filterType: "liquid",
    filterId: "lmc-exposed",
    color: 0x167800,
    time: 0,
    blend: 5,
    intensity: 0.0001,
    spectral: false,
    scale: 7,
	alpha: 0.4,
    animated: {
      time: { active: true, speed: 0.0015, animType: "move" },
      intensity: {
        active: true,
        animType: "syncCosOscillation",
        loopDuration: 30000,
        val1: 0.0001,
        val2: 4
      },
      scale: {
        active: true,
        animType: "syncCosOscillation",
        loopDuration: 30000,
        val1: 7,
        val2: 1
      }
    }
  },

  {
    filterType: "zapshadow",
    filterId: "lmc-exposed",
    alphaTolerance: 0.50
  },

  {
    filterType: "xglow",
    filterId: "lmc-exposed",
    auraType: 2,
    color: 0x903010,
    thickness: 9.8,
    scale: 1.0,
    time: 0,
    auraIntensity: 2,
    subAuraIntensity: 1.5,
    threshold: 0.40,
    discard: true,
    animated: {
      time: { active: true, speed: 0.0027, animType: "move" },
      thickness: {
        active: true,
        loopDuration: 3000,
        animType: "cosOscillation",
        val1: 2,
        val2: 5
      }
    }
  }
];



      if (!TokenMagic.hasFilterId(token, "lmc-exposed")) {
        await token.TMFXaddUpdateFilters(effect);
      }

      console.log("LMC: Applied exposed effect");
    },

    remove: async (token) => {
      await TokenMagic.deleteFilters(token, "lmc-exposed");
      console.log("LMC: Removed exposed effect");
    }
  },
  
    // IMPAIRED
  "impaired": {
    apply: async (token) => {
      const effect = 
  [{
    filterType: "pixel",
    filterId: "lmc-impaired-pixel",
    sizeX: 0.9,
    sizeY: 0.9
	},
	{
     filterType: "transform",
     filterId: "lmc-impaired-tilt",
     rotation: -10,
     animated: {
     rotation: { active: true, animType: "none" }
	 }
}];

      if (!TokenMagic.hasFilterId(token, "lmc-impaired-pixel")) {
        await token.TMFXaddUpdateFilters(effect);
      }

      console.log("LMC: Applied impaired effect");
    },

    remove: async (token) => {
      await TokenMagic.deleteFilters(token, "lmc-impaired-pixel");
	  await TokenMagic.deleteFilters(token, "lmc-impaired-tilt");
      console.log("LMC: Removed impaired effect");
    }
  },
 
  
     // STUNNED
  "stunned": {
    apply: async (token) => {
      const effect = 
 [{
        filterType: "transform",
        filterId: "lmc-stunned-pixel",
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

      if (!TokenMagic.hasFilterId(token, "lmc-stunned-pixel")) {
        await token.TMFXaddUpdateFilters(effect);
      }

      console.log("LMC: Applied stunned effect");
    },

    remove: async (token) => {
      await TokenMagic.deleteFilters(token, "lmc-stunned-pixel");
	  await TokenMagic.deleteFilters(token, "lmc-stunned-tilt");
      console.log("LMC: Removed stunned effect");
    }
  },
  
// add more tokenmagic here

};
