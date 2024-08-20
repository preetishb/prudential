import { decorateBlock } from '../../blocks/video/video.js';
import { decorateExternalLinks,wrapImgsInLinks,addTitleToImgs } from '../../scripts/aem.js';


export default function decorate(block) {

  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  if (block.classList.contains('video-column')) {
    // setup image columns
  [...block.children].forEach((row) => {
    row.classList.add("card-block");
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        picWrapper.classList.add('video');
        decorateBlock(picWrapper)
        
      }
    });
  });
  } else {
    // setup image columns
    [...block.children].forEach((row) => {
      row.classList.add("card-block");
      [...row.children].forEach((col) => {
        const pic = col.querySelector('picture');
        if (pic) {
          const picWrapper = pic.closest('div');
          if (picWrapper && picWrapper.children.length === 1) {
            // picture is only content in column
            picWrapper.classList.add('columns-img-col');
          }

        }
      });
    });
  }
/*
  if(block.classList.contains('external-link')){
    decorateExternalLinks(block);
  }

  if(block.classList.contains('img-wrapped-link')){
    wrapImgsInLinks(block);
  }

  if(block.classList.contains('titled-image')){
    addTitleToImgs(block);
  }

*/
}


