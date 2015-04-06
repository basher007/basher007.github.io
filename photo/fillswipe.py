#!/usr/bin/env python
from wand.image import Image
import os, glob, re

categories = ['bedrooms', 'children', 'coupe', 'kitchens', 'various', 'wall_units']
#categories = ['kitchens_converted2']

PATH = '/home/jbgood/photo2/'
fout = open('result.html', 'w')

for category in categories:
    fout.write('<h2>%s gallery:</h2>\n' % (category.title()))
    fout.write('  <div class="my-simple-gallery" itemscope itemtype="http://schema.org/ImageGallery">\n')
    for f in glob.glob(os.path.join(PATH, str(category)+'_converted', '*.small.jpg')):
        with Image(filename=f) as i:
        	resolution = str(i.width) + "x" + str(i.height)
        	fname = str(os.path.basename(f))
        	ftbl = re.sub('small', 'tbl', fname)
        	fout.write('<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">\n')
        	fout.write('\t<a href="../photo/%s/%s" itemprop="contentUrl" data-size="%s">\n' % (category, fname, resolution))
        	fout.write('\t\t<img src="../photo/%s/%s" itemprop="thumbnail" alt="" />\n' % (category, ftbl))
        	fout.write('\t</a>\n')
        	fout.write('\t<figcaption itemprop="caption description">Image caption  1</figcaption>\n')
        	fout.write('</figure>\n')
    fout.write('  </div>\n\n')
            #print f + ":  " + str(i.width) + "x" + str(i.height)
            #print('width =', i.width)
            #print('height =', i.height)
