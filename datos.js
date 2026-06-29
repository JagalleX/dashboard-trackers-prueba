/* ============================================================
   DATOS DEL DASHBOARD
   Este es el ÚNICO archivo que necesitas editar para actualizar.
   Una línea por campo:
     id      = número del campo
     total   = nº total de trackers
     counts  = trackers que han COMPLETADO cada paso, en orden:
               [1 montaje estr, 2 lib int estr, 3 lib ext estr,
                4 montaje mód,  5 lib int mód,  6 lib ext mód]
               Como es secuencial, cada número debe ser ≤ al anterior.
               Usa null en los pasos sin dato todavía → "por confirmar".
     ejemplo = true para marcar el campo como dato de muestra (opcional)

   Tras editar: guarda y haz commit. La página se actualiza sola.
   ============================================================ */
window.DATOS = [
  { id:14, total:51, counts:[47, 47, 47, null, null, null] },
  { id:15, total:60, counts:[51, 48, 45, 30, 22, 15], ejemplo:true },
  { id:16, total:44, counts:[44, 40, 38, 25, 18, 9],  ejemplo:true },
];
