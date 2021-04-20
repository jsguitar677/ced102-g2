<?php
try {
require_once "../../connect_ced102g2.php";

$sql = "SELECT * FROM prod
WHERE prodno = :prodno
";

$per_info_data = $pdo->prepare($sql);
$per_info_data->bindValue(":id", $id);
$per_info_data->execute();

$numberId = $per_info_data->fetchAll(PDO::FETCH_ASSOC);
json_encode($numberId);
echo "Successfully deleted";
} catch (PDOException $e) {
echo $e->getMessage(), "<br>";
echo $e->getLine(), "<br>";
echo "Internal system error. Please contact administrator if the problem persists.<br>";
}
?>