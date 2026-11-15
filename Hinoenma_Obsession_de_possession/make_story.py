import json
from pathlib import Path
root=Path('/mnt/data/Hinoenma_Obsession_de_possession')
chapters=[]
def add(id,roman,title,period,subtitle,images,track,kind,body,transition=None):
    chapters.append(dict(id=id,roman=roman,title=title,period=period,subtitle=subtitle,images=images,track=track,kind=kind,body=body.strip(),transition=transition))

add('insouciance','I','L’insouciance de la jeunesse','Hiver 1605 — Vers l’année de ses dix-huit ans','La petite fille qui croyait en tout le monde',[17],'hino','light',r'''
C’est bientôt le Nouvel An !

Je suis tellement contente ! Maman m’a confié une mission très importante aujourd’hui : aller acheter nos tablettes porte-bonheur pour la nouvelle année. Elle dit qu’il faut les choisir avec beaucoup d’attention, parce qu’elles porteront nos vœux jusqu’aux divinités.

J’espère qu’elles m’entendront !

Après tout, l’année prochaine sera particulière pour moi. Je vais avoir dix-huit ans ! Papa dit souvent que c’est à cet âge que les filles de notre village deviennent véritablement des dames.

Une dame ! Vous imaginez ?

Oh ! Peut-être que je tomberai amoureuse ! J’aimerais tellement rencontrer quelqu’un avec qui partager de belles choses. Quelqu’un qui me ferait rire, avec qui je pourrais contempler les fleurs au printemps et admirer les étoiles en hiver.

Mais pour l’instant, je dois surtout retrouver la marchande de tablettes !

C’est une dame adorable. Chaque année, elle confectionne ses tablettes avec un soin extraordinaire. Elle connaît presque tous les habitants du village et se souvient même des vœux que nous avons formulés l’année précédente !

Je lui ai apporté quelques beignets de riz que j’ai préparés ce matin. Elle travaille tellement pour les autres que je voulais lui faire plaisir, moi aussi.

Elle a beaucoup ri en me voyant arriver avec mon petit paquet encore chaud. Je crois même qu’elle était un peu émue !

J’ai aussi croisé la vieille dame qui habite près du pont. Elle se plaint toujours de ses jambes, alors je l’ai aidée à porter son panier jusqu’à chez elle. Elle m’a encore dit que je devrais arrêter de courir partout pour rendre service aux autres.

Mais pourquoi donc ?

**Il n’y a rien de plus agréable que de voir quelqu’un sourire !**

J’aimerais tant que tout le monde puisse être heureux. Même les personnes qui semblent désagréables ont sûrement leurs propres soucis. Papa dit parfois que je suis trop naïve, mais je ne crois pas que ce soit une mauvaise chose de vouloir comprendre les autres.

Peut-être que certaines personnes ont simplement besoin qu’on leur tende la main.

Oh ! J’ai presque oublié ! Cette année, j’ai décidé de formuler un vœu très particulier.

Je voudrais apprendre à reconnaître ce qu’il y a de meilleur chez chacun.

Car j’en suis certaine.

**Au fond de chaque être humain, il existe une lumière.**

Et même lorsqu’elle est toute petite, même lorsqu’elle semble sur le point de s’éteindre… il suffit parfois d’un peu d’amour pour la faire briller de nouveau.
''')

add('sacrifice','II','Le sacrifice','Printemps 1606 — Dix-huit ans','Le sourire que l’on offre pour ne pas inquiéter',[16],'hino','light',r'''
Papa m’a annoncé une grande nouvelle aujourd’hui.

**Je vais me marier !**

Et pas avec n’importe qui ! Le seigneur Saionji Takamasa en personne aurait exprimé le désir de me prendre pour épouse.

Tout le monde semble tellement heureux !

Papa n’arrête pas de répéter que c’est un honneur extraordinaire pour notre famille. Il dit que nous n’aurons plus jamais à nous inquiéter du lendemain, que mes frères et sœurs pourront vivre convenablement et que notre nom sera désormais respecté.

Maman a pleuré lorsque nous en avons parlé. Je lui ai demandé pourquoi elle pleurait alors que c’était une si bonne nouvelle. Elle m’a simplement serrée très fort contre elle.

J’ai pensé qu’elle devait être très émue. Après tout, sa petite fille va bientôt devenir une véritable dame !

On m’appellera désormais **dame Hino de la maison Saionji**.

C’est étrange, n’est-ce pas ? Je n’aurais jamais imaginé qu’une fille comme moi puisse un jour habiter une aussi grande demeure.

Je suis un peu inquiète, naturellement.

Je n’ai jamais rencontré le seigneur Takamasa personnellement. Je connais seulement les histoires que les gens racontent à son sujet. On le dit puissant, respectable, raffiné et particulièrement attaché aux traditions.

Cela doit être quelqu’un de merveilleux ! Enfin… je l’espère.

Je voudrais tellement être une bonne épouse. Peut-être pourrais-je continuer à aider les habitants du village grâce aux ressources de sa maison ? Peut-être même pourrais-je faire davantage pour les familles qui rencontrent des difficultés !

Oh ! Ce serait formidable !

Je dois simplement apprendre à me comporter comme une dame de son rang. Il faudra probablement que je sois moins bruyante. Et que je cesse de courir partout. Et peut-être aussi que j’apprenne à mieux dissimuler mes émotions…

Ah, cela fait beaucoup de choses à changer !

Mais je suis sûre que tout ira bien.

Papa a tellement travaillé pour nous offrir une belle vie. Maman s’est tellement sacrifiée pour ses enfants. Aujourd’hui, c’est à mon tour de faire quelque chose pour eux.

Alors je sourirai. Je sourirai autant qu’il le faudra pour qu’ils ne regrettent jamais leur décision.

…

J’aurais simplement aimé tomber amoureuse avant de me marier.

Ce n’est pas grave ! L’amour peut sûrement venir après le mariage, n’est-ce pas ?

Et puis, le seigneur Takamasa doit forcément avoir une très belle lumière en lui. Une lumière immense, même ! Après tout, un homme aussi admiré ne pourrait pas être autrement.

**Oui… Il possède certainement une merveilleuse lumière.**

J’en suis sûre.

Je dois en être sûre.
''')

add('pourquoi','III','Pourquoi ? Pourquoi ?','Automne 1606 — Le domaine Saionji','Le jour où la lumière ne suffit plus',[19],'inst','dusk',r'''
Je crois… Je crois que quelque chose ne va pas.

Cela fait plusieurs mois que je vis dans cette demeure. Elle est immense. Les jardins sont magnifiques, les couloirs semblent interminables et les serviteurs se montrent toujours très respectueux.

Tout est exactement comme on me l’avait décrit. Tout, sauf…

Non. Je ne devrais pas penser ainsi.

Le seigneur est un homme important. Il porte de lourdes responsabilités. Il est naturel qu’il se montre parfois sévère. C’est probablement moi qui ne comprends pas encore suffisamment les usages de cette maison.

Les autres épouses sont gentilles avec moi, même si elles parlent très peu. Au début, je pensais qu’elles étaient simplement timides.

Mais maintenant…

Je comprends pourquoi elles baissent les yeux lorsqu’il entre dans une pièce. Je comprends pourquoi certaines sursautent lorsqu’elles entendent ses pas. Je comprends pourquoi elles ne rient jamais lorsque les portes sont fermées.

…

Je l’ai vu.

Je l’ai vu faire.

Et je n’ai rien pu faire.

Je lui ai demandé d’arrêter. Je lui ai dit qu’il devait certainement y avoir une autre manière de régler les choses. Je l’ai supplié de me laisser aider cette pauvre femme.

Il m’a regardée.

Puis il a ri.

Pourquoi ? Pourquoi a-t-il ri ? Je ne comprends pas.

Ce n’était pas une punition destinée à corriger une faute. Ce n’était pas une colère incontrôlable qu’il aurait regrettée ensuite.

Il semblait… il semblait y prendre plaisir.

Et ce qui me terrifie le plus, c’est la facilité avec laquelle il reprend ensuite ses habitudes. Le même homme qui se montre si courtois devant ses invités peut devenir méconnaissable lorsque personne ne le regarde.

Le même homme qui parle d’honneur et de justice peut ordonner des choses terribles sans éprouver le moindre remords apparent.

Comment est-ce possible ? Comment peut-on porter autant de lumière devant les autres et laisser derrière soi de telles ténèbres ?

Je pensais que la bonté existait chez tout le monde. Je le pense encore. Je veux le penser.

Alors pourquoi… pourquoi est-ce que je n’arrive pas à voir la sienne ?

J’ai essayé, pourtant. Chaque fois qu’il me faisait du mal, je cherchais une explication. Chaque fois qu’il humiliait l’une de ses épouses, je m’efforçais de comprendre ce qui avait pu le rendre ainsi. J’ai cherché dans ses paroles, dans ses gestes, dans ses rares sourires.

J’ai cherché si longtemps…

…

**Je n’y arrive pas.**

Je ne… je n’arrive plus à la voir.

On dirait… on dirait qu’il n’y a que des ténèbres. Des ténèbres si profondes qu’elles étouffent absolument tout.

Mais c’est impossible ! Il doit bien rester quelque chose ! Une toute petite lumière ! Quelque part ! N’est-ce pas ?

…

**Pourquoi ?**

Pourquoi les hommes sont-ils capables de faire autant de mal ? Et pourquoi ceux qui prétendent être les plus vertueux sont-ils parfois ceux qui cachent les ténèbres les plus effroyables ?

Je croyais connaître la lumière des hommes.

Je commence seulement à découvrir leurs ombres.
''')

add('revelation','IV','La révélation','Hiver 1606 — La dernière nuit des Saionji','Une perfection au milieu du massacre',[19,18],'inst','blood',r'''
Du sang.

Il y avait du sang partout.

Sur les parois autrefois immaculées. Sur les tatamis. Sur les vêtements de ceux qui, quelques instants auparavant, se croyaient protégés par les murs de cette demeure.

Je n’entendais plus les ordres du seigneur. Je n’entendais plus les pas des soldats. Seulement le bruit lointain de quelque chose qui s’effondrait.

Tout était terminé.

Ses gardes. Ses serviteurs. Ses épouses. L’homme dont le nom faisait trembler tant de villageois.

Tout ce qu’il avait possédé. Tout ce qu’il avait bâti. Tout ce qu’il croyait éternel.

**Disparu.**

Et au milieu de ce carnage… il y avait cet être.

Je ne savais pas qui il était. Je ne savais pas d’où il venait. Je ne savais même pas s’il appartenait réellement au monde des hommes.

J’aurais dû avoir peur. J’aurais dû détourner les yeux. Peut-être aurais-je dû le haïr pour tout ce sang versé.

Mais… je ne pouvais pas.

Je ne pouvais tout simplement pas détourner mon regard.

Il était… **magnifique.**

Non. Ce mot était insuffisant.

Ce n’était pas seulement son apparence. Ce n’était pas sa force, ni même cette facilité effrayante avec laquelle il avait anéanti tout un domaine.

C’était quelque chose de bien plus profond. Je le voyais. Sa lumière.

Je n’avais jamais contemplé une lumière semblable. Elle n’était pas douce. Elle n’était pas chaleureuse. Elle ne ressemblait à aucune de celles que j’avais appris à aimer.

Et pourtant… elle était si pure. Si éclatante. Si étrangement authentique !

Chez les hommes, la lumière cherchait sans cesse à dissimuler les ténèbres. On prétendait être juste en commettant des injustices. On parlait d’amour pour mieux posséder. On invoquait l’honneur pour justifier la cruauté.

Mais lui… lui ne cherchait pas à se présenter comme un homme bon.

Il n’avait pas besoin de masquer sa nature derrière des paroles rassurantes. Ses ténèbres étaient là, visibles, immenses. Et pourtant, elles ne semblaient pas souiller sa lumière.

Au contraire…

**J’avais l’impression qu’elles la rendaient encore plus éclatante.**

Pour la première fois de ma vie, je contemplais quelqu’un qui me semblait entièrement fidèle à lui-même. Quelqu’un dont l’existence ne paraissait pas dépendre du jugement des autres. Quelqu’un qui ne demandait pas pardon pour ce qu’il était.

J’en avais les larmes aux yeux.

Alors… c’était donc cela ? La perfection ?

Je l’avais cherchée si longtemps chez les hommes. Et voici qu’elle se tenait devant moi, au milieu de leurs cadavres.

Il s’est approché. Je me souviens de son regard. Il m’a observée comme s’il venait de découvrir quelque chose d’inattendu.

Puis il m’a dit qu’il m’épargnerait. Qu’il avait besoin de moi. Que je possédais quelque chose de précieux.

…

Moi ? Précieuse ?

Toute ma vie, on avait décidé de ce que je devais être. Une bonne fille. Une épouse convenable. Une possession dont on devait pouvoir être fier.

Mais cet être venait de détruire tout ce qui m’enchaînait. Et maintenant… il me disait que j’avais de la valeur.

Je ne savais pas encore ce qu’il attendait réellement de moi.

Cela n’avait aucune importance.

Car, ce soir-là, j’avais trouvé ce que j’avais passé toute mon existence à chercher.

**La lumière parfaite.**
''','split')

add('muzan','V','MUZAN — KIBUTSUJI MUZAN','Hiver 1606 — La naissance d’Hinoenma','La possession change de mains',[18],'inst','blood',r'''
Je ne savais pas qu’il était possible de renaître sans avoir véritablement vécu.

Pourtant, c’est ce qui m’est arrivé.

Cette nuit-là, mon seigneur m’a offert une nouvelle existence. Une existence débarrassée de la fragilité qui condamnait les hommes à voir leur lumière s’éteindre.

Je ne connaîtrais plus la vieillesse. Je ne serais plus condamnée à subir les caprices d’un époux. Je pourrais devenir forte. Si forte que plus personne ne pourrait m’enlever ce qui m’était précieux.

Et surtout… je pourrais accomplir ce que je n’avais jamais réussi à faire de mon vivant.

**Protéger la lumière des hommes.**

Mon seigneur m’avait montré une forme de perfection dont je ne soupçonnais même pas l’existence. Désormais, je voulais la partager.

Je voulais empêcher les hommes de se perdre dans leurs propres ténèbres. Je voulais les préserver de leur hypocrisie, de leur cruauté et de leurs faiblesses.

Je voulais… les garder auprès de moi. Pour toujours.

Oh… comme j’étais heureuse !

Il y avait pourtant quelque chose d’étrange. Les visages de ceux qui avaient peuplé mon existence précédente s’éloignaient déjà. Des voix que j’avais autrefois connues devenaient silencieuses. Des souvenirs disparaissaient comme des dessins effacés par la pluie.

Je savais avoir été humaine. Je savais avoir souffert. Mais les détails de cette existence m’échappaient.

Et bientôt, même le prénom de celle que j’avais été ne signifia plus grand-chose.

Hino…

Un nom si lointain. Comme s’il avait appartenu à quelqu’un d’autre.

Pourtant, au plus profond de moi, quelque chose avait survécu. Une conviction. Une certitude que je ne savais plus expliquer.

**Chaque être possède une lumière qu’il faut protéger.**

Je ne savais plus exactement d’où me venait cette pensée. Mais je savais qu’elle était juste.

Mon seigneur m’avait donné une nouvelle vie. Et avec elle, un nouveau nom.

**Hinoenma.**

Comme il était beau. Comme il me convenait.

J’allais enfin pouvoir donner tout mon amour à ceux qui en avaient besoin. Et si quelqu’un essayait de s’éloigner… si quelqu’un refusait cette lumière… alors je trouverais un moyen de le garder.

Après tout, n’était-ce pas précisément ce que signifiait aimer ? Ne jamais abandonner ceux qui nous sont précieux ? Ne jamais les laisser disparaître ?

**Désormais, ce serait à moi de les posséder.**
''')

add('ascension','✦','Deux siècles à conquérir la nuit','1607–1811 — L’ascension d’Hinoenma','La naissance d’une Lune supérieure',[12],'inst','night',r'''
Les années passent si vite lorsqu’on ne vieillit plus !

C’est une chose merveilleuse, vous savez ?

Les hommes naissent, grandissent, vieillissent et disparaissent. Leurs villages changent. Leurs royaumes s’effondrent. Leurs noms finissent par être oubliés.

Mais moi… **moi, je demeure.**

J’ai rencontré tellement de personnes au cours de ces années ! Des guerriers. Des marchands. Des nobles. Des enfants devenus adultes avant que je ne m’en aperçoive.

J’ai contemplé leurs lumières. J’ai tenté de les comprendre. Et, naturellement, j’ai continué à me nourrir. Il fallait bien devenir plus forte !

Mon seigneur m’avait accordé un présent extraordinaire. Il aurait été honteux de ne pas chercher à m’en montrer digne.

Alors j’ai appris. J’ai appris à chasser. À reconnaître ceux qui représentaient une menace. À combattre les hommes qui portaient ces étranges lames capables de blesser les miens.

J’ai découvert que les démons eux-mêmes pouvaient se montrer jaloux, cruels et avides de pouvoir. Quelle surprise ! Même libérés de leur humanité, certains continuaient de se comporter comme ces hommes qui m’avaient jadis tant déçue.

Ils se battaient pour des territoires. Pour leur nourriture. Pour quelques faveurs de notre seigneur.

Certains me défiaient. D’autres cherchaient à me tromper.

Oh, comme cela pouvait devenir fatigant !

Au début, j’essayais de leur parler. Je leur expliquais qu’il était inutile de se disputer. Que nous servions tous un être merveilleux. Que nous devrions simplement nous réjouir de notre existence.

Mais ils ne m’écoutaient pas toujours. Alors… j’ai dû apprendre à me montrer plus ferme. Beaucoup plus ferme.

Les décennies ont passé. Les adversaires sont devenus plus redoutables. Les pourfendeurs plus expérimentés. Et mon pouvoir s’est développé à mesure que je dévorais les humains et affrontais ceux qui voulaient m’exterminer.

J’ai survécu à des blessures qui auraient détruit des démons plus faibles. J’ai vaincu des rivaux qui pensaient pouvoir prendre ma place. J’ai accompli les missions que mon seigneur me confiait, éliminant ceux qui entravaient ses projets.

Certains adversaires m’ont obligée à combattre durant des nuits entières. D’autres ont réussi à me blesser suffisamment pour que je sois contrainte de battre en retraite.

Ces rencontres m’ont appris la prudence.

Et surtout, elles m’ont convaincue d’une chose : je devais devenir assez puissante pour ne plus jamais perdre ce que je désirais protéger.

Alors j’ai continué. Encore. Et encore.

Jusqu’à ce que mon seigneur reconnaisse ma valeur. Jusqu’à ce qu’il m’accorde une place parmi les démons les plus puissants de son organisation.

**Deuxième Lune Supérieure.**

Oh… quelle joie ! Je ne crois pas avoir jamais été aussi fière !

Mon seigneur avait reconnu mes efforts. Il m’avait confié une place qui faisait de moi l’une de ses plus importantes servantes. Et moi… je comptais bien lui montrer qu’il avait eu raison de me choisir.

Pourtant, même après toutes ces années… même après toutes ces victoires… il me manquait quelque chose.

Je possédais la force. La reconnaissance. Une existence que les hommes ordinaires ne pouvaient qu’imaginer.

Mais je n’avais toujours pas réussi à accomplir mon souhait le plus précieux.

Car chaque fois que je rencontrais une lumière que je voulais conserver… elle finissait par s’éteindre.

Et cela… cela me rendait terriblement triste.
''')

add('lumiere','VI','Sa lumière était si belle','1812 — Deux siècles plus tard','La chasseuse que l’on aurait dû laisser libre',[8,9],'inst','night',r'''
Oh… je me souviens de cette fille.

Comment aurais-je pu l’oublier ?

Sa lumière était si belle. Si vive ! Je pouvais passer des heures à l’admirer.

Elle avait quelque chose de fascinant. Une volonté inflexible. Un courage extraordinaire. Et cette manière de se dresser face aux créatures de la nuit comme si sa propre vie n’avait aucune importance.

Elle était l’une de ces femmes qui chassaient les démons. À cette époque, ceux de sa région opéraient encore en petits groupes dispersés. Ils partageaient leurs informations, se transmettaient leurs méthodes et risquaient leurs vies pour protéger les habitants.

Je trouvais cela adorable. Vraiment !

Il y avait quelque chose de si pur dans son désir de sauver les autres.

Elle éveillait en moi une sensation étrange. Une chaleur familière. Comme le souvenir d’une émotion dont j’aurais oublié l’origine.

Enfin, cela n’a plus d’importance. Ce qui m’intéressait, c’était sa lumière. Et celle-ci était merveilleuse.

Mais plus je l’observais, plus une chose me préoccupait. Chaque fois qu’elle abattait un démon, son regard semblait devenir plus lourd. Chaque nouvelle bataille laissait derrière elle un peu plus de fatigue. Un peu plus de douleur. Un peu plus de colère.

Oh, ma pauvre petite… comme tu devais souffrir !

Je le voyais, tu sais ? Ta haine. Cette haine que tu nourrissais envers les miens. Envers mon seigneur. Je pouvais presque la sentir grandir.

Et je comprenais ! Bien sûr que je comprenais ! Tout le monde n’avait pas eu la chance de contempler sa perfection comme je l’avais fait.

Tout le monde n’avait pas compris combien sa lumière était extraordinaire.

Tu ne savais pas encore. Voilà tout.

Alors je t’ai observée. Longtemps.

Je voulais trouver le moment idéal pour t’approcher. Je voulais t’expliquer. Te montrer qu’il existait une autre voie. Une existence dans laquelle tu ne serais plus obligée de souffrir, de te battre ou de craindre de perdre ceux que tu aimais.

Je voulais tellement te serrer dans mes bras. Te dire que tout irait bien. Te promettre que je prendrais soin de toi.

Mais à mesure que le temps passait… ta lumière semblait perdre de son éclat.

Et cela… cela me faisait mal. Terriblement mal.

**Je ne pouvais pas te laisser te détruire ainsi.**

Non. Tu étais beaucoup trop précieuse. Beaucoup trop belle.

Il fallait que je te sauve. Même si tu ne le comprenais pas encore.
''','crossfade')

add('je-te-veux','VII','Je te veux','1812 — La première rencontre','L’amour auquel on ne peut échapper',[2],'inst','night',r'''
Pourquoi ? Pourquoi est-ce que tu me regardes ainsi ?

Je ne comprends pas.

Je suis venue pour toi. Je voulais simplement te parler. Tu aurais dû être heureuse !

J’ai tant de choses à t’offrir ! Une existence merveilleuse. Une éternité sans souffrance. Une lumière qui ne s’éteindra jamais.

Alors pourquoi… pourquoi as-tu sorti ton sabre ?

Je t’ai pourtant souri. Je t’ai dit que je t’aimais. Je t’ai même tendu les bras !

Mais tu m’as attaquée. Encore. Et encore.

Tu me poursuis à travers cette forêt comme si j’étais ton ennemie ! Pourquoi ? Tu ne comprends donc pas ? Je ne veux pas te faire de mal ! Je veux seulement te garder auprès de moi !

Tu es si belle… si précieuse…

**JE TE VEUX !**

…

Aïe.

Cela fait mal.

Cette lame… elle m’a réellement blessée. Je n’avais pas ressenti une telle douleur depuis bien longtemps. Tu m’as presque arraché un bras.

Et pourtant, même maintenant, tu continues de lever ton arme vers moi. Pourquoi ?

Je n’avais jamais rencontré quelqu’un qui résiste autant. J’ai connu des hommes qui m’ont suppliée de les laisser partir. J’en ai connu d’autres qui ont tenté de me tromper. Certains ont pleuré, d’autres m’ont insultée.

Mais toi… toi, tu es différente.

Tu continues de te battre alors même que je ne te souhaite que du bonheur. Tu sembles préférer la mort à l’amour que je t’offre.

C’est absurde. Complètement absurde !

Je… je ne comprends pas ! Qu’est-ce qui ne va pas chez toi ? Est-ce que je ne suis pas assez douce ? Est-ce que je ne suis pas assez belle ? Est-ce que je ne t’ai pas suffisamment montré combien tu comptais pour moi ?

…

Pourquoi est-ce que tu me détestes ?

**POURQUOI REFUSES-TU DE M’AIMER ?!**
''')

add('mon-seigneur','VIII','Mon seigneur… ?','1812 — Le désespoir d’Hinoenma','Une promesse entendue autrement',[4,18],'song','blood',r'''
Je… je ne sais plus quoi faire.

J’ai essayé. J’ai tellement essayé.

Toutes ces années… tous ces visages… toutes ces lumières merveilleuses que j’ai rencontrées… je voulais les protéger. Je voulais les aimer. Je voulais les garder.

Mais ils me rejettent tous. Ils me regardent avec horreur. Ils me supplient de les laisser partir.

Et lorsque j’essaie de les retenir… ils finissent par mourir. Tous. Tous dans mes bras.

Pourquoi ? Pourquoi est-ce que cela arrive toujours ?

Je les serre contre moi parce que je les aime ! Je ne veux pas leur faire de mal ! Je veux simplement qu’ils restent ! Je veux pouvoir contempler leur lumière encore un peu ! Encore une nuit ! Encore une année ! Encore une éternité !

Mais ils sont si fragiles… leurs corps se brisent. Leurs vies s’échappent. Leurs lumières disparaissent. Et je me retrouve seule. Encore. Et encore. Et encore…

Je ne veux plus !

**JE NE VEUX PLUS LES PERDRE !**

…

Mon seigneur ? Est-ce vraiment vous ? Je reconnaîtrais cette présence entre mille.

Votre lumière… elle est toujours aussi magnifique. Toujours aussi parfaite.

Je suis revenue vers vous parce que je ne savais plus où aller. J’ai tellement honte… je voulais accomplir de si belles choses grâce à la vie que vous m’aviez offerte. Et pourtant… je n’y arrive pas.

**[MUZAN]** Pourquoi pleures-tu donc ?

Cette voix. Si calme. Si assurée. Comme si rien au monde ne pouvait véritablement troubler son existence.

J’ai senti les larmes revenir. Je n’ai même pas essayé de les retenir. Je me suis approchée de lui, puis j’ai enfoui mon visage contre lui. Mes épaules tremblaient. Je pleurais comme une enfant.

— Mon seigneur… je… je ne peux pas… Je ne peux pas conserver leur lumière… je les aime tellement… je veux les rendre heureux… mais ils meurent tous… ils meurent tous dans mes bras… je ne veux plus perdre personne… je vous en supplie… aidez-moi…

**[MUZAN]** Tu t’obstines à préserver des êtres dont l’existence est condamnée à disparaître.

J’ai levé les yeux vers lui.

— Mais… ils sont si beaux… leurs lumières sont si belles… je ne veux pas qu’elles s’éteignent…

**[MUZAN]** Alors pourquoi tiens-tu tant à les conserver tels qu’ils sont ?

…

Je n’ai pas compris immédiatement. Que voulait-il dire ?

Il a posé son regard sur moi. Et soudain… j’ai eu l’impression de retrouver cette sensation merveilleuse qui m’avait envahie lorsque je l’avais rencontré pour la première fois. Cette certitude absolue. Cette impression qu’il possédait toutes les réponses.

**[MUZAN]** Tu possèdes déjà tout ce qu’il faut pour accomplir ton souhait. Il ne te manque que la volonté de faire ce qui est nécessaire.

Je l’ai regardé, les yeux encore humides.

— Mon seigneur… que voulez-vous dire ?

**[MUZAN]** Je vais t’apprendre comment faire en sorte qu’eux aussi soient aussi beaux que toi.

…

Je crois que mon cœur se serait arrêté. Si j’en avais encore eu besoin pour vivre.

Était-ce possible ? Vraiment possible ? Mes mains se sont agrippées à ses vêtements.

— Mon seigneur… vous voulez dire que… que je pourrais… les garder ? Pour toujours ?

…

Il ne m’a pas promis qu’ils m’aimeraient. Il ne m’a pas assuré qu’ils seraient heureux. Il m’a simplement montré ce que mon pouvoir et mon rang me permettaient désormais d’accomplir.

Mais à mes yeux… c’était le plus merveilleux des présents.

Oh… **oh, comme je vous aime !**
''','hallucination')

add('kidnapping','IX','Désormais, tu m’appartiendras !','1812 — Le premier enlèvement','La tendresse qui refuse le non',[10,11],'song','blood',r'''
Je t’ai retrouvée !

Oh, comme je suis heureuse ! Tu n’imagines pas combien tu m’as manqué !

Je pensais souvent à toi. À tes beaux yeux. À cette formidable volonté que tu possèdes. À cette lumière que tu t’obstines à laisser se consumer.

Mais tout va bien maintenant ! Mon seigneur m’a montré une solution ! Une merveilleuse solution !

Je n’aurai plus besoin de te regarder souffrir. Je n’aurai plus besoin de craindre que tes ténèbres finissent par dévorer ta lumière.

Et surtout… je n’aurai plus jamais besoin de te laisser partir.

…

Quoi ? Tu veux encore te battre ?

Oh, ma pauvre chérie… tu n’as vraiment rien compris.

J’ai pourtant pris le temps de préparer notre rencontre. J’ai choisi un endroit tranquille. Je me suis assurée que personne ne viendrait nous déranger. Je voulais que nous puissions enfin parler sans que tu essaies de me trancher la tête !

Mais tu recommences… toujours cette haine. Toujours cette colère. Toujours cette peur dans tes yeux.

Pourquoi t’obstines-tu à me repousser ?

…

Non. Non, non, non ! Cette fois, je ne te laisserai pas recommencer !

Tu vas m’écouter ! Tu vas comprendre ! Je sais ce qui est bon pour toi ! Je sais ce qui protégera ta merveilleuse lumière !

Et puisque tu refuses obstinément de m’accompagner… puisque tu préfères risquer ta vie plutôt que de me laisser te sauver…

**JE VAIS DEVOIR TE KIDNAPPER !**

…

Voilà. C’est mieux ainsi.

Tu peux te débattre si cela te rassure. Tu peux me détester. Tu peux même continuer à m’insulter. Cela n’a aucune importance. Je ne t’en veux pas.

Les enfants ne comprennent pas toujours pourquoi on doit les protéger d’eux-mêmes.

Et moi… moi, je suis prête à supporter toute ta colère. Toute ta haine. Tous tes reproches.

Parce que je t’aime. Parce que je sais qu’un jour, tu comprendras. Un jour, tu me remercieras. Tu verras comme je suis gentille avec toi.

Alors ne pleure plus. Ne sois pas effrayée. Je vais prendre soin de toi. Je vais t’offrir le plus merveilleux des présents.

Et ensuite…

**Tu m’appartiendras.**

Pour toujours.
''','crossfade')

add('kagari','X','Désormais, tu m’appartiens','1812 — La première enfant','Kagari, celle qui ne pouvait plus partir',[6,5],'song','night',r'''
Oh… oh, mon enfant… regarde-toi… tu es… tu es tellement belle…

Je ne trouve même plus les mots. Je n’ai jamais rien vu d’aussi merveilleux.

Ta lumière… je la vois ! Elle est toujours là ! Non… elle est encore plus belle qu’avant !

Toutes ces ténèbres qui semblaient vouloir la dévorer… toute cette souffrance… toute cette fragilité… tout a disparu !

Oh… merci… merci, mon seigneur… merci de m’avoir appris à accomplir un tel miracle… je n’y serais jamais parvenue sans vous.

…

Pardonne-moi. Je pleure encore. C’est ridicule, n’est-ce pas ? Je suis simplement si heureuse…

Je n’ai plus besoin d’avoir peur. Je ne risque plus de la voir vieillir. Je ne risque plus de la voir mourir dans mes bras.

Elle est là. Devant moi. Vivante. Magnifique. Éternelle.

— Mon enfant… est-ce que tu m’entends ?

Ses yeux se sont ouverts. Elle m’a regardée. Longuement.

Je ne retrouvais plus la haine qui déformait autrefois son si beau visage. Elle semblait perdue, comme si elle découvrait le monde pour la toute première fois.

Pourtant, pendant un instant… j’ai cru apercevoir quelque chose. Une hésitation. Une inquiétude. Comme si une partie d’elle cherchait encore à comprendre ce qui venait de lui arriver.

Mais cette expression a disparu presque immédiatement.

Oh, ma pauvre petite… elle devait simplement être désorientée.

Je lui ai souri. Je lui ai caressé les cheveux.

— Tout va bien, ma chérie. Tu n’as plus rien à craindre. Je suis là. Je serai toujours là.

…

Elle n’a pas immédiatement répondu. Alors je l’ai serrée contre moi. Doucement. Avec toute la tendresse que je gardais en moi depuis si longtemps.

Je lui ai donné un nom.

**Kagari.**

Une flamme que je ne laisserais jamais s’éteindre.

— Dis-moi, mon enfant… quel est ton nom ?

**[KAGARI]** Je… je m’appelle Kagari, mère.

…

Mère ? Elle… elle m’avait appelée… mère ?

Oh… oh, mon adorable petite fille ! Je me suis mise à pleurer de plus belle. Je l’ai serrée contre moi sans parvenir à retenir mes sanglots.

— Oui ! Oui, mon amour ! Je suis ta mère ! Ta maman ! Et je t’aime ! Je t’aime tellement ! Tu es si belle ! Si merveilleuse ! Je suis si fière de toi !

…

Cette nuit-là, j’ai enfin compris. Il ne suffisait pas d’aimer la lumière des hommes.

Il fallait les délivrer de tout ce qui risquait de l’éteindre. De leur faiblesse. De leur mortalité. De ces émotions si douloureuses qui finissaient par les détruire.

Je pouvais leur offrir mieux. Je pouvais leur offrir ce que mon seigneur m’avait offert. Une existence nouvelle. Une lumière éternelle. Une perfection que les hommes ordinaires ne pourraient jamais atteindre.

Et si je les aimais suffisamment… alors je pourrais tous les sauver. Tous.

…

Kagari s’est blottie contre moi. Ses mains tremblaient encore légèrement. Je les ai prises entre les miennes.

— N’aie plus peur, mon enfant. Tu ne seras plus jamais seule. Je te le promets.

Elle m’a regardée. Pendant quelques secondes, elle a semblé vouloir dire quelque chose. Puis elle a baissé les yeux.

**[KAGARI]** … Merci, mère.

…

Oh… quel bonheur ! Elle me remerciait déjà ! J’en étais certaine. J’avais fait ce qu’il fallait.

**J’avais enfin trouvé comment préserver ce que j’aimais.**
''','crossfade')

add('tous','XI','JE VOUS VEUX, TOUS !','1925 — Le présent','La mère des enfants qu’elle n’a jamais laissés choisir',[3],'song','blood',r'''
— Kagari, ma chérie ? Approche donc. Regarde ce que j’ai trouvé.

Ils sont de plus en plus nombreux, n’est-ce pas ? Ces hommes et ces femmes qui se font appeler pourfendeurs de démons.

Je me souviens de l’époque où tu les côtoyais encore. Dans ta région, vous étiez si peu nombreux à vous battre ensemble. Quelques courageux qui prenaient les armes malgré la peur.

Aujourd’hui… ils se rassemblent. Ils s’entraînent. Ils se transmettent leurs connaissances. Ils deviennent si nombreux…

Oh… toutes ces merveilleuses lumières… je ne sais même plus où donner de la tête !

Mais il y a un problème. Un terrible problème. Mon seigneur est mécontent. Les pourfendeurs lui causent tant de désagréments… il semble parfois si contrarié que j’en ai le cœur brisé.

Je n’aime pas le voir ainsi. Je voudrais tellement le rendre heureux. Lui montrer combien je lui suis reconnaissante. Lui offrir quelque chose qui lui ferait plaisir.

Et je crois… je crois que j’ai trouvé !

Kagari ? Te souviens-tu de la première fois où je t’ai rencontrée ? Tu étais si courageuse. Si déterminée. Mais ta lumière était tellement menacée par les ténèbres… et regarde-toi aujourd’hui ! Tu es devenue si belle ! Si parfaite ! Je suis tellement fière de toi !

**[KAGARI]** Je me souviens surtout de la nuit où vous m’avez accueillie, mère.

— Oh, ma chérie… comme c’est touchant !

**[KAGARI]** Vous m’avez donné un nom. Une place. Une raison d’exister. Et vous m’avez appris que les choses précieuses ne doivent jamais être abandonnées.

Oh ! Ne dis pas de si jolies choses ! Tu vas encore me faire pleurer ! Ahahah !

Kagari a esquissé un sourire. Un sourire discret. Elle n’avait jamais été aussi démonstrative que moi. C’était d’ailleurs l’une des choses que j’aimais tant chez elle.

Elle me semblait toujours si calme. Si réfléchie. Si attentive à tout ce qui l’entourait.

Ma chère première fille… celle qui avait été à mes côtés pendant plus d’un siècle. Celle qui connaissait mieux que personne mes joies, mes peines et mes merveilleuses petites habitudes.

— Mère !

Une autre voix s’est élevée derrière moi. C’était Shizuku, l’une de mes plus jeunes filles. Elle semblait impatiente de m’annoncer quelque chose.

**[SHIZUKU]** Nous avons repéré plusieurs déplacements de pourfendeurs. Ils semblent préparer une nouvelle opération.

— Vraiment ? Oh, quelle merveilleuse nouvelle !

**[TSUBAKI]** Mère, souhaitez-vous que nous les éliminions avant qu’ils ne deviennent une menace ?

Les éliminer ? J’ai tourné doucement la tête vers elle. Quelle étrange idée. Pourquoi voudrais-je détruire quelque chose d’aussi précieux ?

— Oh, Tsubaki… ma chérie… tu as encore tellement de choses à apprendre. Je ne veux pas les tuer. Je veux les sauver.

Je veux leur offrir ce que j’ai offert à ta sœur. À toi. À tous mes merveilleux enfants. Je veux qu’ils soient heureux. Je veux qu’ils découvrent la véritable perfection. Je veux qu’ils comprennent combien mon seigneur est merveilleux. Je veux…

Oh.

Je viens d’avoir une idée. Une idée absolument merveilleuse !

Kagari ! Shizuku ! Tsubaki ! Venez toutes ici ! Votre maman a quelque chose de très important à vous annoncer !

…

Nous allons tous les accueillir ! Tous ces courageux pourfendeurs ! Toutes ces belles âmes ! Toutes ces lumières qui risquent de s’éteindre !

Nous allons leur offrir une nouvelle existence ! Une famille ! Une éternité !

Oh, comme ce sera beau ! Comme mon seigneur sera heureux ! Il verra tous ces merveilleux enfants que nous aurons sauvés ! Et ils finiront tous par comprendre ! Ils comprendront pourquoi nous les aimons autant ! Ils comprendront pourquoi nous ne pouvons pas les laisser partir !

**[SHIZUKU]** Tous, mère ? Même ceux qui refuseront de nous suivre ?

— Bien sûr, ma chérie ! Surtout ceux qui refuseront ! Ce sont souvent ceux qui ont le plus besoin de notre aide.

**[TSUBAKI]** Et s’ils tentent de nous tuer ?

— Alors nous devrons faire preuve de patience ! Beaucoup de patience ! Ils ne savent simplement pas encore ce qui les attend. N’est-ce pas, Kagari ?

Ma première fille est restée silencieuse quelques instants. Elle a regardé ses deux sœurs. Puis elle s’est tournée vers moi.

**[KAGARI]** Je comprends votre souhait, mère. Vos désirs sont des ordres. Eux aussi atteindront la perfection.

Oh, ma petite Kagari… tu es vraiment ma plus grande fierté. Viens donc embrasser ta maman.

…

Voilà. C’est parfait. Tout sera parfait.

Nous allons leur tendre les bras. Nous allons les aimer. Nous allons les protéger.

Et s’ils refusent… s’ils se débattent… s’ils pleurent… s’ils nous supplient de les laisser partir…

Eh bien ! Nous devrons simplement être un peu plus insistantes !

Après tout, ce n’est pas leur faute s’ils ne comprennent pas encore ce qui est bon pour eux. Ils sont si fragiles. Si naïfs. Ils ne savent pas à quel point leur lumière est précieuse.

Mais moi… **moi, je le sais.**

Je l’ai toujours su. Je ne saurais plus dire quand cette conviction est née en moi. Je ne me souviens plus des visages qui me l’ont enseignée. Je ne me souviens plus de la petite humaine qui croyait autrefois pouvoir sauver le monde.

Mais cela n’a aucune importance. Car cette lumière… je la vois toujours.

Et aujourd’hui encore… je les aime. Je les aime tellement. Je les aime tous !

Alors venez donc, mes enfants. Nous avons beaucoup à faire. Il y a tant de merveilleuses lumières à préserver. Tant d’âmes à délivrer. Tant de personnes qui ne savent pas encore combien elles ont besoin de notre amour.

Et moi… moi, je ne veux plus jamais perdre personne. Plus jamais.

**JE VOUS VEUX… TOUS !**

[FINAL] « Et quelque part dans un coin du Japon, une certaine Frite ferait mieux de surveiller ses arrières… »

**JE VAIS TE KIDNAPPER, FRITE !!!**
''')

(root/'chapters.js').write_text('window.HINO_STORY = '+json.dumps(chapters,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
print('Saved chapters:',len(chapters),'words:',sum(len(c['body'].split()) for c in chapters),'characters:',sum(len(c['body']) for c in chapters))
