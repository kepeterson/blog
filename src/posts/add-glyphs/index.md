---
title: "Adding New Glyphs to a Font"
date: "2018-12-05"
---

Ever wanted to add your own glyphs to a font? It's surprisingly easy once you know the. I chose [BirdFont](https://birdfont.org/) as my font editor after a cursory look over the free options. It did not disappoint:

![Bird Font](birdfont.png)

In the screenshot above, I'm out the unicode weeds, but you should be able to see the two glyphs I added: ⬆️ and ⬇️. Adding the glyphs was super easy -- I found my .ttf, opened it in BirdFont, navigated to the empty code point in the Overview pane (unused code points show a default version of the glyph but in a light, light gray), double-clicked to open and began doing some vector drawing:

![Bird Font Drawing](birdfont2.png)

Once the glyph looks how you like, press ⌘+E to export back to .ttf. Load your new font file up on your website, and you're done -- new glyphs for your font!
