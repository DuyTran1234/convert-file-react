import { ConvertBackgroundColor } from "../color/color";
import { pathImage } from "../path-image/pathImage";

export const convertFileTypeList = new Map()
    .set(1, {
        name: 'PDF to Word',
        type: 1,
        backgroundColor: ConvertBackgroundColor.backgroundColorPdf,
        borderColor: ConvertBackgroundColor.borderColorPdf,
        iconImg: pathImage.pdfImg,
        extension: ".pdf",
    })
    .set(2, {
        name: 'PDF to Excel',
        type: 2,
        backgroundColor: ConvertBackgroundColor.backgroundColorPdf,
        borderColor: ConvertBackgroundColor.borderColorPdf,
        iconImg: pathImage.pdfImg,
        extension: ".pdf",
    })
    .set(3, {
        name: 'PDF to PowerPoint',
        type: 3,
        backgroundColor: ConvertBackgroundColor.backgroundColorPdf,
        borderColor: ConvertBackgroundColor.borderColorPdf,
        iconImg: pathImage.pdfImg,
        extension: ".pdf",
    })
    .set(4, {
        name: 'PDF to EPUB',
        type: 4,
        backgroundColor: ConvertBackgroundColor.backgroundColorPdf,
        borderColor: ConvertBackgroundColor.borderColorPdf,
        iconImg: pathImage.pdfImg,
        extension: ".pdf",
    })
    .set(5, {
        name: 'Word to PDF',
        type: 5,
        backgroundColor: ConvertBackgroundColor.backgroundColorWord,
        borderColor: ConvertBackgroundColor.borderColorWord,
        iconImg: pathImage.wordImg,
        extension: ".doc,.docx",
    })
    .set(6, {
        name: 'Excel to PDF',
        type: 6,
        backgroundColor: ConvertBackgroundColor.backgroundColorExcel,
        borderColor: ConvertBackgroundColor.borderColorExcel,
        iconImg: pathImage.excelImg,
        extension: ".xls,.xlsx",
    })
    .set(7, {
        name: 'PowerPoint to Word',
        type: 7,
        backgroundColor: ConvertBackgroundColor.backgroundColorPptx,
        borderColor: ConvertBackgroundColor.borderColorPptx,
        iconImg: pathImage.pptxImg,
        extension: ".ppt,.pptx",
    })

