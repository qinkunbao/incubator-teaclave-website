initSidebarItems({"enum":[["ColorType","An enumeration over supported color types and their bit depths"],["DynamicImage","A Dynamic Image"],["FilterType","Available Sampling Filters."],["ImageError","An enumeration of Image errors"],["ImageFormat","An enumeration of supported image formats. Not all formats support both encoding and decoding."],["ImageOutputFormat","An enumeration of supported image formats for encoding."]],"fn":[["guess_format","Guess image format from memory block"],["image_dimensions","Read the dimensions of the image located at the specified path. This is faster than fully loading the image and then getting its dimensions."],["load","Create a new image from a Reader"],["load_from_memory","Create a new image from a byte slice"],["load_from_memory_with_format","Create a new image from a byte slice"],["open","Open the image located at the path specified. The image's format is determined from the path's file extension."],["save_buffer","Saves the supplied buffer to a file at the path specified."],["save_buffer_with_format","Saves the supplied buffer to a file at the path specified in the specified format."]],"mod":[["bmp","Decoding and Encoding of BMP Images"],["dxt","Decoding of DXT (S3TC) compression"],["flat","Image representations for ffi."],["gif","Decoding of GIF Images"],["ico","Decoding and Encoding of ICO files"],["imageops","Image Processing Functions"],["io","Input and output of images."],["jpeg","Decoding and Encoding of JPEG Images"],["math","Mathematical helper functions and types."],["png","Decoding and Encoding of PNG Images"],["pnm","Decoding of netpbm image formats (pbm, pgm, ppm and pam)."],["tga","Decoding of TGA Images"],["tiff","Decoding and Encoding of TIFF Images"],["webp","Decoding of Webp Images"]],"struct":[["Bgr","BGR colors"],["Bgra","BGR colors + alpha channel"],["Frame","A single animation frame"],["Frames","An implementation dependent iterator, reading the frames as requested"],["ImageBuffer","Generic image buffer"],["Luma","Grayscale colors"],["LumaA","Grayscale colors + alpha channel"],["Pixels","Immutable pixel iterator"],["Rgb","RGB colors"],["Rgba","RGB colors + alpha channel"],["SubImage","A View into another image"]],"trait":[["AnimationDecoder","AnimationDecoder trait"],["ConvertBuffer","Provides color conversions for whole image buffers."],["GenericImage","A trait for manipulating images."],["GenericImageView","Trait to inspect an image."],["ImageDecoder","The trait that all decoders implement"],["ImageDecoderExt","ImageDecoderExt trait"],["Pixel","A generalized pixel."],["Primitive","Primitive trait from old stdlib"]],"type":[["GrayAlphaImage","Sendable grayscale + alpha channel image buffer"],["GrayImage","Sendable grayscale image buffer"],["ImageResult","Result of an image decoding/encoding process"],["RgbImage","Sendable Rgb image buffer"],["RgbaImage","Sendable Rgb + alpha channel image buffer"]]});