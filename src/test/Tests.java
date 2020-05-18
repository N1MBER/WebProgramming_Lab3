package test;

import main.Point;
import org.junit.Assert;
import org.junit.Test;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class Tests {
    private List<Point> points;
    private List<Boolean> inArea;
    private String path = "src/test/points.csv";

    public Tests() {
        points = new ArrayList<>();
        inArea = new ArrayList<>();
        try {
            this.setPoints();
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }

    public void setPoints() throws IOException {
        try (BufferedReader bufferedReader = new BufferedReader(new FileReader(new File(path)))) {
            String line = bufferedReader.readLine();
            while (line != null) {
                String values[] = line.split(",");
                points.add(new Point(Double.parseDouble(values[1]), Double.parseDouble(values[2]),
                        Double.parseDouble(values[0]), Boolean.parseBoolean(values[3])));
                inArea.add(Boolean.parseBoolean(values[3]));
                line = bufferedReader.readLine();
            }
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }

    @Test
    public void checkDot0(){
        Assert.assertEquals(points.get(0).isInArea(),inArea.get(0));
    }

    @Test
    public void checkDot1(){
        Assert.assertEquals(points.get(1).isInArea(),inArea.get(1));
    }

    @Test
    public void checkDot2(){
        Assert.assertEquals(points.get(2).isInArea(),inArea.get(2));
    }

    @Test
    public void checkDot3(){
        Assert.assertEquals(points.get(3).isInArea(),inArea.get(3));
    }

    @Test
    public void checkDot4(){
        Assert.assertEquals(points.get(4).isInArea(),inArea.get(4));
    }

    @Test
    public void checkDot5(){
        Assert.assertEquals(points.get(5).isInArea(),inArea.get(5));
    }

    @Test
    public void checkDot6(){
        Assert.assertEquals(points.get(6).isInArea(),inArea.get(6));
    }

    @Test
    public void checkDot7(){
        Assert.assertEquals(points.get(7).isInArea(),inArea.get(7));
    }

    @Test
    public void checkDot8(){
        Assert.assertEquals(points.get(8).isInArea(),inArea.get(8));
    }

    @Test
    public void checkDot9(){
        Assert.assertEquals(points.get(9).isInArea(),inArea.get(9));
    }

    @Test
    public void checkDot10(){
        Assert.assertEquals(points.get(10).isInArea(),inArea.get(10));
    }

    @Test
    public void checkDot11(){
        Assert.assertEquals(points.get(11).isInArea(),inArea.get(11));
    }

    @Test
    public void checkDot12(){
        Assert.assertEquals(points.get(12).isInArea(),inArea.get(12));
    }

    @Test
    public void checkDot13(){
        Assert.assertEquals(points.get(13).isInArea(),inArea.get(13));
    }

    @Test
    public void checkDot14(){
        Assert.assertEquals(points.get(14).isInArea(),inArea.get(14));
    }

    @Test
    public void checkDot15(){
        Assert.assertEquals(points.get(15).isInArea(),inArea.get(15));
    }

    @Test
    public void checkDot16(){
        Assert.assertEquals(points.get(16).isInArea(),inArea.get(16));
    }

    @Test
    public void checkDot17(){
        Assert.assertEquals(points.get(17).isInArea(),inArea.get(17));
    }

    @Test
    public void checkDot18(){
        Assert.assertEquals(points.get(18).isInArea(),inArea.get(18));
    }

    @Test
    public void checkDot19(){
        Assert.assertEquals(points.get(19).isInArea(),inArea.get(19));
    }

    @Test
    public void checkDot20(){
        Assert.assertEquals(points.get(20).isInArea(),inArea.get(20));
    }

    @Test
    public void checkDot21(){
        Assert.assertEquals(points.get(21).isInArea(),inArea.get(21));
    }

    @Test
    public void checkDot22(){
        Assert.assertEquals(points.get(22).isInArea(),inArea.get(22));
    }

    @Test
    public void checkDot23(){
        Assert.assertEquals(points.get(23).isInArea(),inArea.get(23));
    }

    @Test
    public void checkDot24(){
        Assert.assertEquals(points.get(24).isInArea(),inArea.get(24));
    }

    @Test
    public void checkDot25(){
        Assert.assertEquals(points.get(25).isInArea(),inArea.get(25));
    }

    @Test
    public void checkDot26(){
        Assert.assertEquals(points.get(26).isInArea(),inArea.get(26));
    }

    @Test
    public void checkDot27(){
        Assert.assertEquals(points.get(27).isInArea(),inArea.get(27));
    }

    @Test
    public void checkDot28(){
        Assert.assertEquals(points.get(28).isInArea(),inArea.get(28));
    }

    @Test
    public void checkDot29(){
        Assert.assertEquals(points.get(29).isInArea(),inArea.get(29));
    }

    @Test
    public void checkDot30(){
        Assert.assertEquals(points.get(30).isInArea(),inArea.get(30));
    }

    @Test
    public void checkDot31(){
        Assert.assertEquals(points.get(31).isInArea(),inArea.get(31));
    }

    @Test
    public void checkDot32(){
        Assert.assertEquals(points.get(32).isInArea(),inArea.get(32));
    }

    @Test
    public void checkDot33(){
        Assert.assertEquals(points.get(33).isInArea(),inArea.get(33));
    }

    @Test
    public void checkDot34(){
        Assert.assertEquals(points.get(34).isInArea(),inArea.get(34));
    }

    @Test
    public void checkDot35(){
        Assert.assertEquals(points.get(35).isInArea(),inArea.get(35));
    }

    @Test
    public void checkDot36(){
        Assert.assertEquals(points.get(36).isInArea(),inArea.get(36));
    }

    @Test
    public void checkDot37(){
        Assert.assertEquals(points.get(37).isInArea(),inArea.get(37));
    }

    @Test
    public void checkDot38(){
        Assert.assertEquals(points.get(38).isInArea(),inArea.get(38));
    }

    @Test
    public void checkDot39(){
        Assert.assertEquals(points.get(39).isInArea(),inArea.get(39));
    }

    @Test
    public void checkDot40(){
        Assert.assertEquals(points.get(40).isInArea(),inArea.get(40));
    }

    @Test
    public void checkDot41(){
        Assert.assertEquals(points.get(41).isInArea(),inArea.get(41));
    }

    @Test
    public void checkDot42(){
        Assert.assertEquals(points.get(42).isInArea(),inArea.get(42));
    }

    @Test
    public void checkDot43(){
        Assert.assertEquals(points.get(43).isInArea(),inArea.get(43));
    }

    @Test
    public void checkDot44(){
        Assert.assertEquals(points.get(44).isInArea(),inArea.get(44));
    }

    @Test
    public void checkDot45(){
        Assert.assertEquals(points.get(45).isInArea(),inArea.get(45));
    }

    @Test
    public void checkDot46(){
        Assert.assertEquals(points.get(46).isInArea(),inArea.get(46));
    }

    @Test
    public void checkDot47(){
        Assert.assertEquals(points.get(47).isInArea(),inArea.get(47));
    }

    @Test
    public void checkDot48(){
        Assert.assertEquals(points.get(48).isInArea(),inArea.get(48));
    }

    @Test
    public void checkDot49(){
        Assert.assertEquals(points.get(49).isInArea(),inArea.get(49));
    }

    @Test
    public void checkDot50(){
        Assert.assertEquals(points.get(50).isInArea(),inArea.get(50));
    }

    @Test
    public void checkDot51(){
        Assert.assertEquals(points.get(51).isInArea(),inArea.get(51));
    }

    @Test
    public void checkDot52(){
        Assert.assertEquals(points.get(52).isInArea(),inArea.get(52));
    }

    @Test
    public void checkDot53(){
        Assert.assertEquals(points.get(53).isInArea(),inArea.get(53));
    }

    @Test
    public void checkDot54(){
        Assert.assertEquals(points.get(54).isInArea(),inArea.get(54));
    }

    @Test
    public void checkDot55(){
        Assert.assertEquals(points.get(55).isInArea(),inArea.get(55));
    }

    @Test
    public void checkDot56(){
        Assert.assertEquals(points.get(56).isInArea(),inArea.get(56));
    }

    @Test
    public void checkDot57(){
        Assert.assertEquals(points.get(57).isInArea(),inArea.get(57));
    }

    @Test
    public void checkDot58(){
        Assert.assertEquals(points.get(58).isInArea(),inArea.get(58));
    }

    @Test
    public void checkDot59(){
        Assert.assertEquals(points.get(59).isInArea(),inArea.get(59));
    }
}
