package test;

import main.Point;
import org.junit.Assert;
import org.junit.Test;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class Tests {
    private List<Point>points;
    private List<Boolean>inArea;
    private String path = "src/test/point.csv";

    public Tests(){
        points = new ArrayList<>();
        inArea = new ArrayList<>();
        try {
            this.setPoints();
        }catch (IOException e){
            System.out.println(e.getMessage());
        }
    }

    public void setPoints() throws IOException {
        FileReader fileReader = new FileReader(new File(path));
        try(BufferedReader bufferedReader = new BufferedReader(fileReader)){
            String line = bufferedReader.readLine();
            while (line != null){
                String values[] = line.split(",");
                points.add(new Point(Double.parseDouble(values[0]), Double.parseDouble(values[1]),
                        Double.parseDouble(values[2]), Boolean.parseBoolean(values[3])));
                inArea.add(Boolean.parseBoolean(values[3]));
            }
        }catch (IOException e){
            System.out.println(e.getMessage());
        }
    }

    @Test
    public void checkDots(){
        for (int i = 0; i < points.size(); i++) {
            Assert.assertEquals("Error at line №" + Integer.toString(++i) ,points.get(i).isInArea(),inArea.get(i));
        }
    }
}
