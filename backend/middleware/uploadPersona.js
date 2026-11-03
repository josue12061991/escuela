import multer from "multer"

//esto tbn funciona , solo que no se va poder leer el mensaje que lanza multer
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 2 * 1024 * 1024 }, // 2 MB es lo que aceptara
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true)
    } else {
      cb(new Error("Solo se permiten imágenes"))
    }
  },
})


// esta manera hace que sdi ocurre algun error que detecte multer, respecto a su peso , se le pueda enviar con un mensaje para ser leido
export const subirImagenSlider = (req, res, next) => {
    upload.single("url_imagen")(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            if (err.code === "LIMIT_FILE_SIZE") {
                return res.status(413).json({ message: "La imagen no debe pesar más de 10 MB" })
            }
            return res.status(400).json({ message: err.message })
        }
        if (err) return res.status(400).json({ message: err.message })
        next()
    })
  }

export default upload