<?php
header('Content-Type: application/json');
echo json_encode(
  array(
    'name' => 'OnTime',
    'symbol' => 'OTO',
    'protocol' => 'ERC20',
    'decimals' => 18,
    'total_supply' => 3000000000000,
    'circulating_supply' => 21042034,
    'contract_address' => '0x028CE5EA3298a50c0D8a27b937b1F48Cf0d68b56',
    'contract_creator' => '0x0AeB46e87f064a548Dfd1aC7e5c92B2b983648ED'
  )
);
?>
