
    // Массив с примерными трек-номерами
    const validTrackNumbers = ['78465950556141', 'JT5331027993364', '78466187325374', '464007409225748', '464024113779296', 'SF1398380976137', '777265558960884', '9803375277748', '78466052301859', '464027681567804', '464021235696030', '777265727842614', 'YT8722315630758', 'YT8721710796799', 'YT8722662695147', '464022397621232', '78465709918647', '78466074567414', '777265737225994', 'YT8721714493069', '777266116570748', '464020999765073', '78466077933210', 'YT8721481617213', '78465730755714', '78465736863677', '78465720620384', '78465720628730', '78465645898257', 'YT7512097806552', '777265515995614', '434303933770281', '78466241683344', '9803457353222', '464025096484430', '9803462510284', '464015250317157', '78466119317126', '464026647607894', 'YT8721957954938', '9803374372278', '464013498565996', '464022307026274', '464024644951017', 'YT8721499887286', 'YT8721605714187', '312573581716526', '464021815488485', '464021772963128', 'YT8721603257831', 'YT8721604566989', 'YT8721587519877', 'YT7511646940514', 'YT8721508096995', '464025311438736','777265056220669', 'YT8721291969160', '464008424345769', '464009858303111', '464009474768136', 
    'JT5330208480305', '777264611718529', '777265076617097', '777264004144605', '464008473430483', 
    '777264792272703', '464008255502960', '464019721838146', '777264985539035', '777265021193265', 
    'YT8721402673274', '464007645668056', '8227293891010', '78464595647605', '464009323649749', 
    '777264143190952', '777264977701455', '464018111193388', '78464473399259', '9803312219252', 
    '777264869930143', '777264888614951', '9803293685988', '464010099642089', 'YT8721235793132', 
    'YT8720854151422', '777264671199005', '777264802442144', '78464799312969', '464010033432537', 
    '777264888296996', '777264292449156', 'JT5329567890037', '9803337284545', '9803391921263', 
    '777264797558405', 'YT8721301198742', '777263985065979', 'YT8721222401262', 'YT8721674803427', 
    '78466091794289', '78466155334557', '777265381759227', 'JT5330863727032', 'JT5331761262919', 
    'YT8722810117178', 'JT5331117454545', 'JT5330933613778', '777265168605614', '777266188596605', 
    '777265626343826', 'JT5330850452295', '777265650022761', '777266111090068', '777265686441798', 
    'JT5331087839924', 'JT5331015123710', '777265433807491', 'YT8722407749940', 'JT5330864954594', 
    '777265714644827', 'JT5330960600362', '777265701031765', 'JT5330879071964', 'JT5331208920764', 
    'JT5331044317325', 'JT5330848939859', '777266135358798', '777266128160210', '777266199046363', 
    'JT5331655376991', 'JT5331564522116', 'JT5330852335532', 'JT5331616265782', 'JT5331068421421', 
    'JT5331025047053', 'JT5331190448486', 'JT5330936250661', 'JT5331080389850', 'JT5331760679813', 
    'JT5331633472977', 'JT5331655112806', 'JT5331551132929', 'JT5331611577223', 'JT5331010170841', 
    'JT5330855963424', 'JT5330855962034', 'JT5330854137030', 'JT5330854466859', 'JT5330847584535', 
    'JT5331665882069', 'JT5331305786717', 'JT5331848037118', '78466068732782', '9803470351734','464016571087910', '777264453161029', 'JT5330495824441', 'YT8721919477792', 'JT5330596054229', 
    '9803412654363', 'JT5331430710670', '9803356511616', 'JT5331465829626', '464016534422683', 
    'YT8721550271919', '464014327417310', '78465415353676', '777265146349849', '78465530279433', 
    '78465550768018', 'YT8721827648525', 'YT8722094263606', 'YT8722123337416', 'YT8721819784923', 
    'YT8721887469973', 'YT8722016778597', '78465411585700', 'JT5330631838227', 'JT5330557036440', 
    '9803370720461', 'JT5330421465172', '9803392831592', '9803413430011', '9803361807136', 
    'JT5331388524958', '9803366685986', 'YT2535301568829', '9803369129404', '9803387907354', 
    'JT5330612548184', '464013323858948', '464014502039014', '464014332112558', '9803365865008', 
    '777265152149450', '777265102871142', 'YT8721995612049', '464013611644294', '777265597375350', 
    'YT8721991526092', 'YT8721907651575', '464013327023271', '464015784046679', 'JT5330707356658', 
    '464016317957615', 'YT8721812616027', '464013388495514', '464013308223250', '464013838626766', 
    '464014151579954', 'YT8722067680667', '464013322246057', '777265308857004', '464016522883003', 
    '464014429336040', 'JT5330740080573', '777265091412894', '464013953088671', 'YT8721590374692', 
    'DPK317065545223', 'YT8722054031957', 'YT8721545901951', 'YT8721585689190', 'YT8722084527882', 
    'YT8721595805812', 'YT8721514682755', 'YT8721597760728', 'YT2535301560726', 'YT8721595538839', 
    'YT8721563460270', 'JT5331466790628', 'YT8722048326416', 'JT5331425768467', 'JT5331149112984', 
    '464016557743789', '464016557713895', 'YT7510954021287', 'YT7510946469037', '777265306159542', 
    '777264783391774', '777264766930886', '464007501205347', '78465056286349', '78464876769078', 
    '78465211319149', '464009896045277', '464019174342439', '464017497858215', '777264955763505', 
    '78464653594367', '464009870562348', 'JT5329865165959', '464009751575552', '9803295923446','777265100711785', '464026232455352', '464015726900597', '9803475503779', '9803447886868', 
    'YT8721756202692', '9803375787540', '78465510098669', '464013567240060', '777265082096790', 
    '777265090219200', '777265134534380', '777265208039192', '777265236409022', '777265377578306', 
    '464026497160695', '464013710758828', '464015945761280', '464026190460521', '464014646732633', 
    '464026185268105', '777265243464811', '78465698620631', '78465468720556', 'YT8721735259442', 
    '464015627240295', '78465419269169', '78465407610245', '464014366048931', 'YT8722069419841', 
    'YT8721571131780', '78465595206743', 'YT8721985409101', '9803484884784', '78465505407616', 
    '78465364329844', '78465284136717', '78465408900431', 'YT8722040906496', '78465493685465', 
    '78465498432001', '78465527783926', '777265230766417', 'JT5330751768104', '777265354376473', 
    '777264508924035', '777265148209012', '78465373678371', 'JT5331415585278', '777265131608543', 
    '777264458068625', '464014023183547', '464015504767142', '464014501595557', '464016063907309', 
    '464016315573954', 'YT8721188693907', '464015491159540', '9803475917727', '9803382614059', 
    '9803489260174', '9803382428164', '777265143670462', '777265235867143', '9803476875271', 
    '777265348825203', '777265142116141', '777265445260591', '9803379501824', '9803374617926', 
    '9803375495425', '9803482879872', '9803383086131', '9803381852574', '9803375495080', 
    '78465511592290', '777265107579759', '9803487068753', '9803474996289', '9803486943662', 
    '9803487153366', '777265195517185', 'YT8721862616013', '777264557663882', '777265097751965', 
    'YT8721950900349', 'YT8721243605056', '464016835064403', '464016835064843', '78465227015045', 
    '9803456114828', '73538663366974', '777264567561971', '777265200975565', 'YT8721330631612', 
    '777265326877600', 'YT8721833339554', '434299698125168', 'YT8721939586799','777265152149450', '777265102871142', 'YT8721995612049', '464013611644294', '777265597375350', 
    'YT8721991526092', 'YT8721907651575', '464013327023271', '464015784046679', 'JT5330707356658', 
    '464016317957615', 'YT8721812616027', '464013388495514', '464013308223250', '464013838626766', 
    '464014151579954', 'YT8722067680667', '464013322246057', '777265308857004', '464016522883003', 
    '464014429336040', 'JT5330740080573', '777265091412894', '464013953088671', 'YT8721590374692', 
    'DPK317065545223', 'YT8722054031957', 'YT8721545901951', 'YT8721585689190', 'YT8722084527882', 
    'YT8721595805812', 'YT8721514682755', 'YT8721597760728', 'YT2535301560726', 'YT8721595538839', 
    'YT8721563460270', 'JT5331466790628', 'YT8722048326416', 'JT5331425768467', 'JT5331149112984', 
    '464016557743789', '464016557713895', 'YT7510954021287', 'YT7510946469037', '777265306159542', 
    '777264783391774', '777264766930886', '464007501205347', '78465056286349', '78464876769078', 
    '78465211319149', '464009896045277', '464019174342439', '464017497858215', '777264955763505', 
    '78464653594367', '464009870562348', 'JT5329865165959', '464009751575552', '9803295923446', 
    '777265056220669', 'YT8721291969160', '464008424345769', '464009858303111', '464009474768136', 
    'JT5330208480305', '777264611718529', '777265076617097', '777264004144605', '464008473430483', 
    '777264792272703', '464008255502960', '464019721838146', '777264985539035', '777265021193265', 
    'YT8721402673274', '464007645668056', '8227293891010', '78464595647605', '464009323649749', 
    '777264143190952', '777264977701455', '464018111193388', '78464473399259', '9803312219252', 
    '777264869930143', '777264888614951', '9803293685988', '464010099642089', 'YT8721235793132', 
    'YT8720854151422', '777264671199005', '777264802442144', '78464799312969', '464010033432537', 
    '777264888296996', '777264292449156', 'JT5329567890037', '9803337284545', '9803391921263', 
    '777264797558405', 'YT8721301198742', '777263985065979', 'YT8721222401262','777265100711785', '464026232455352', '464015726900597', '9803475503779', '9803447886868', 
    'YT8721756202692', '9803375787540', '78465510098669', '464013567240060', '777265082096790', 
    '777265090219200', '777265134534380', '777265208039192', '777265236409022', '777265377578306', 
    '464026497160695', '464013710758828', '464015945761280', '464026190460521', '464014646732633', 
    '464026185268105', '777265243464811', '78465698620631', '78465468720556', 'YT8721735259442', 
    '464015627240295', '78465419269169', '78465407610245', '464014366048931', 'YT8722069419841', 
    'YT8721571131780', '78465595206743', 'YT8721985409101', '9803484884784', '78465505407616', 
    '78465364329844', '78465284136717', '78465408900431', 'YT8722040906496', '78465493685465', 
    '78465498432001', '78465527783926', '777265230766417', 'JT5330751768104', '777265354376473', 
    '777264508924035', '777265148209012', '78465373678371', 'JT5331415585278', '777265131608543', 
    '777264458068625', '464014023183547', '464015504767142', '464014501595557', '464016063907309', 
    '464016315573954', 'YT8721188693907', '464015491159540', '9803475917727', '9803382614059', 
    '9803489260174', '9803382428164', '777265143670462', '777265235867143', '9803476875271', 
    '777265348825203', '777265142116141', '777265445260591', '9803379501824', '9803374617926', 
    '9803375495425', '9803482879872', '9803383086131', '9803381852574', '9803375495080', 
    '78465511592290', '777265107579759', '9803487068753', '9803474996289', '9803486943662', 
    '9803487153366', '777265195517185', 'YT8721862616013', '777264557663882', '777265097751965', 
    'YT8721950900349', 'YT8721243605056', '464016835064403', '464016835064843', '78465227015045', 
    '9803456114828', '73538663366974', '777264567561971', '777265200975565', 'YT8721330631612', 
    '777265326877600', 'YT8721833339554', '434299698125168', 'YT8721939586799', '464016571087910', 
    '777264453161029', 'JT5330495824441', 'YT8721919477792', 'JT5330596054229', '9803412654363', 
    'JT5331430710670', '9803356511616', 'JT5331465829626', '464016534422683', 'YT8721550271919', 
    '464014327417310', '78465415353676', '777265146349849', '78465530279433', '78465550768018', 
    'YT8721827648525', 'YT8722094263606', 'YT8722123337416', 'YT8721819784923', 'YT8721887469973', 
    'YT8722016778597', '78465411585700', 'JT5330631838227', 'JT5330557036440', '9803370720461', 
    'JT5330421465172', '9803392831592', '9803413430011', '9803361807136', 'JT5331388524958', 
    '9803366685986', 'YT2535301568829', '9803369129404', '9803387907354', 'JT5330612548184', 
    '464013323858948', '464014502039014', '464014332112558', '9803365865008', '777265100711785', '464026232455352', '464015726900597', 
  '9803475503779', '9803447886868', 'YT8721756202692', 
  '9803375787540', '78465510098669', '464013567240060', 
  '777265082096790', '777265090219200', '777265134534380', 
  '777265208039192', '777265236409022', '777265377578306', 
  '464026497160695', '464013710758828', '464015945761280', 
  '464026190460521', '464014646732633', '464026185268105', 
  '777265243464811', '78465698620631', '78465468720556', 
  'YT8721735259442', '464015627240295', '78465419269169', 
  '78465407610245', '464014366048931', 'YT8722069419841', 
  'YT8721571131780', '78465595206743', 'YT8721985409101', 
  '9803484884784', '78465505407616', '78465364329844', 
  '78465284136717', '78465408900431', 'YT8722040906496', 
  '78465493685465', '78465498432001', '78465527783926', 
  '777265230766417', 'JT5330751768104', '777265354376473', 
  '777264508924035', '777265148209012', '78465373678371', 
  'JT5331415585278', '777265131608543', '777264458068625', 
  '464014023183547', '464015504767142', '464014501595557', 
  '464016063907309', '464016315573954', 'YT8721188693907', 
  '464015491159540', '9803475917727', '9803382614059', 
  '9803489260174', '9803382428164', '777265143670462', 
  '777265235867143', '9803476875271', '777265348825203', 
  '777265142116141', '777265445260591', '9803379501824', 
  '9803374617926', '9803375495425', '9803482879872', 
  '9803383086131', '9803381852574', '9803375495080', 
  '78465511592290', '777265107579759', '9803487068753', 
  '9803474996289', '9803486943662', '9803487153366', 
  '777265195517185', 'YT8721862616013', '777264557663882', 
  '777265097751965', 'YT8721950900349', 'YT8721243605056', 
  '464016835064403', '464016835064843', '78465227015045', 
  '9803456114828', '73538663366974', '777264567561971', 
  '777265200975565', 'YT8721330631612', '777265326877600', 
  'YT8721833339554', '434299698125168', 'YT8721939586799', 
  '464016571087910','777264453161029', 'JT5330495824441', 'YT8721919477792', 
  'JT5330596054229', '9803412654363', 'JT5331430710670', 
  '9803356511616', 'JT5331465829626', '464016534422683', 
  'YT8721550271919', '464014327417310', '78465415353676', 
  '777265146349849', '78465530279433', '78465550768018', 
  'YT8721827648525', 'YT8722094263606', 'YT8722123337416', 
  'YT8721819784923', 'YT8721887469973', 'YT8722016778597', 
  '78465411585700', 'JT5330631838227', 'JT5330557036440', 
  '9803370720461', 'JT5330421465172', '9803392831592', 
  '9803413430011', '9803361807136', 'JT5331388524958', 
  '9803366685986', 'YT2535301568829', '9803369129404', 
  '9803387907354', 'JT5330612548184', '464013323858948', 
  '464014502039014', '464014332112558', '9803365865008', 
  '777265152149450', '777265102871142', 'YT8721995612049', 
  '464013611644294', '777265597375350', 'YT8721991526092', 
  'YT8721907651575', '464013327023271', '464015784046679', 
  'JT5330707356658', '464016317957615', 'YT8721812616027', 
  '464013388495514', '464013308223250', '464013838626766', 
  '464014151579954', 'YT8722067680667', '464013322246057', 
  '777265308857004', '464016522883003', '464014429336040', 
  'JT5330740080573', '777265091412894', '464013953088671', 
  'YT8721590374692', 'DPK317065545223', 'YT8722054031957', 
  'YT8721545901951', 'YT8721585689190', 'YT8722084527882', 
  'YT8721595805812', 'YT8721514682755', 'YT8721597760728', 
  'YT2535301560726', 'YT8721595538839', 'YT8721563460270', 
  'JT5331466790628', 'YT8722048326416', 'JT5331425768467', 
  'JT5331149112984', '464016557743789', '464016557713895', 
  'YT7510954021287', 'YT7510946469037', '777265306159542', 
  '777264783391774', '777264766930886', '464007501205347', 
  '78465056286349', '78464876769078', '78465211319149', 
  '464009896045277', '464019174342439', '464017497858215', 
  '777264955763505', '78464653594367', '464009870562348', 
  'JT5329865165959', '464009751575552', '9803295923446', 
  '777265056220669', 'YT8721291969160', '464008424345769','464009858303111', '464009474768136', 'JT5330208480305', 
  '777264611718529', '777265076617097', '777264004144605', 
  '464008473430483', '777264792272703', '464008255502960', 
  '464019721838146', '777264985539035', '777265021193265', 
  'YT8721402673274', '464007645668056', '8227293891010', 
  '78464595647605', '464009323649749', '777264143190952', 
  '777264977701455', '464018111193388', '78464473399259', 
  '9803312219252', '777264869930143', '777264888614951', 
  '9803293685988', '464010099642089', 'YT8721235793132', 
  'YT8720854151422', '777264671199005', '777264802442144', 
  '78464799312969', '464010033432537', '777264888296996', 
  '777264292449156', 'JT5329567890037', '9803337284545', 
  '9803391921263', '777264797558405', 'YT8721301198742', 
  '777263985065979', 'YT8721222401262', 'YT8721674803427', 
  '78466091794289', '78466155334557', '777265381759227', 
  'JT5330863727032', 'JT5331761262919', 'YT8722810117178', 
  'JT5331117454545', 'JT5330933613778', '777265168605614', 
  '777266188596605', '777265626343826', 'JT5330850452295', 
  '777265650022761', '777266111090068', '777265686441798', 
  'JT5331087839924', 'JT5331015123710', '777265433807491', 
  'YT8722407749940', 'JT5330864954594', '777265714644827', 
  'JT5330960600362', '777265701031765', 'JT5330879071964', 
  'JT5331208920764', 'JT5331044317325', 'JT5330848939859', 
  '777266135358798', '777266128160210', '777266199046363', 
  'JT5331655376991', 'JT5331564522116', 'JT5330852335532', 
  'JT5331616265782', 'JT5331068421421', 'JT5331025047053', 
  'JT5331190448486', 'JT5330936250661', 'JT5331080389850', 
  'JT5331760679813', 'JT5331633472977', 'JT5331655112806', 
  'JT5331551132929', 'JT5331611577223', 'JT5331010170841', 
  'JT5330855963424', 'JT5330855962034', 'JT5330854137030', 
  'JT5330854466859', 'JT5330847584535', 'JT5331665882069', 
  'JT5331305786717', 'JT5331848037118', '78466068732782', 
  '9803470351734', '78465950556141', 'JT5331027993364', 
  '78466187325374', '464007409225748', '464024113779296', 
  'SF1398380976137',  '777265558960884', '9803375277748', '78466052301859', 
  '464027681567804', '464021235696030', '777265727842614', 
  'YT8722315630758', 'YT8721710796799', 'YT8722662695147', 
  '464022397621232', '78465709918647', '78466074567414', 
  '777265737225994', 'YT8721714493069', '777266116570748', 
  '464020999765073', '78466077933210', 'YT8721481617213', 
  '78465730755714', '78465736863677', '78465720620384', 
  '78465720628730', '78465645898257', 'YT7512097806552', 
  '777265515995614', '434303933770281', '78466241683344', 
  '9803457353222', '464025096484430', '9803462510284', 
  '464015250317157', '78466119317126', '464026647607894', 
  'YT8721957954938', '9803374372278', '464013498565996', 
  '464022307026274', '464024644951017', 'YT8721499887286', 
  'YT8721605714187', '312573581716526', '464021815488485', 
  '464021772963128', 'YT8721603257831', 'YT8721604566989', 
  'YT8721587519877', 'YT7511646940514', 'YT8721508096995', 
  '464025311438736', '78466221552148', 'YT8722338722690', 
  'YT8722849396135', 'YT8723057237148', 'YT8722957012062', 
  '777266659526953', '777266655983653', '464031582705704', 
  '464030961993541', '464030936060540', '78466735705258', 
  '78466510420233', '78466634130606', '464027121270844', 
  'YT8722950019655', 'YT8723135280880', '464028037281485', 
  '464028731549071', '464020557000134', '9803535395387', 
  '464028037400466', '464030566337194', 'JT5332396849164', 
  'JT5331904391673', 'JT5332454395323', 'JT5332306567832', 
  'JT5331939761708', 'JT5331557073888', 'JT5331830708541', 
  'JT5332330733337', '777265805395731', 'JT5331931175620', 
  '777266393330753', '777266116594178', 'YT8722463525982', 
  '78466198545070', 'JT5332072534413', 'YT8722155114803', 
  '464029854411612', 'JT5332273080776', 'YT8722402340900', 
  'JT5331985546688', 'JT5331109891018', 'JT5331598672780', 
  '464028731634541', 'YT8723042986051', 'YT8722539228102', 
  'YT8722928119000', '464030941670064', '9803451988019', 
  'YT8722349154697', '78466118468641', '9803438891820', 
  '777265969227240', 'YT8722012367610', '9803425789773',  'JT5332074080295', 'JT5331992860875', 'JT5331851825407', 
  '464022159265959', 'JT5331931104436', '777265760492365', 
  '777265839602875', '464027708268466', '777265897914648', 
  '464020005759137', '777265865335918', '777265814175791', 
  '777266005661726', '777266271142645', '78466624955504', 
  '464020485832016', '777266298234758', '464020692590908', 
  'JT5331735104585', '464022421910457', '9803445729594', 
  '9803428357588', '9803509104564', 'YT8723063980292', 
  'YT8723138184394', 'YT8722926572117', 'YT8722366729517', 
  'YT8722966012790', '8285578049205', '9803442936048', 
  '9803510152829', '78466278334691', '78465899449740', 
  '78466118468641', 'JT5332273080776', '464022228794224', 
  '9803497470958', '464022330429358', '9803493236742', 
  '78466184191441', '464021937408999', '464022016162242', 
  '9803423710074', 'JT5332765338623', 'YT8722931387791', 
  '78466169533916', 'JT5332454295738', '78466307680154', 
  '464021359028133', 'JT5331732032151', 'JT5331555000530', 
  '9803504202597', '9278712770', '927712770', '78466824528237', 
  '78467390107910', '78466956866365', '78467161878966', 
  '78467141988198', '464036296164679', '9803590512106', 
  '78467077867353', '464036304436186', '464040039260947', 
  '777266826016197', '464035726873815', '9803595391542', 
  '464035882349232', '78467033092753', '78863236596419', 
  'JT5333058118381', '434306913009862', '777267057927662', 
  '9803543645091', 'YT8723262071003', '777267077559025', 
  '8294330338805', 'JT5332841071370', '9803597772859', 
  '464039971837273', '464034742658429', '464031740865579', 
  '9803550096222', '9803599047694', '9803623487357', 
  '777266479526792', '9803601996545', '777266999966133', 
  '777266516274646', '78466919458953', '9803530011918', 
  'YT8723390035773', '78466944077901', 'JT5333113082598', 
  '78466703802135', '78466835800915', '777267050966066', 
  'YT8723394784831', '464031032077099', 'YT8722946937220', 
  '9803553858885', '78466293657146', '777266633292652', 
  '78466679001074', '777266664431405', '777266654106902', 
  '9803593593273', '464032528781345', '78466744604226', 
  '464027573016021',];

    // Добавляем обработчик на кнопку
    document.getElementById('check-button').addEventListener('click', function () {
      const trackNumber = document.getElementById('track-number').value.trim(); // Получаем введённый номер
      const result = document.getElementById('result'); // Элемент для вывода результата

      if (!trackNumber) { // Если поле пустое
        result.textContent = 'Введите трек-номер!';
        result.style.color = 'red';
        return;
      }

      // Проверяем, есть ли трек-номер в списке
      if (validTrackNumbers.includes(trackNumber)) {
        result.textContent = `Трек-номер ${trackNumber} найден!`; // Используем обратные кавычки
        result.style.color = 'orange';
      } else {
        result.textContent = 'Трек-номер не найден!';
        result.style.color = 'orange';
      }
    });
  
